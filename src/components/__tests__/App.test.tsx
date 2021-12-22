import React, {useContext} from "react"
import {mount, render, shallow} from 'enzyme'
import checkboxes from '../../utils/checkboxes.json';

import App from "../App";

const onclick = jest.fn();
jest.mock('../../store/ConfsStore')

describe("JUG.RU intergrate testing", () => {

    let wrapper = mount(<App/>)

    beforeEach(() => {
        wrapper
            .find('button')
            .simulate('click', {target: {}})
    })

    it('correct rendering App', () => {
        expect(wrapper).toMatchSnapshot();
    })


    it('correct render checkboxes', () => {

        expect(wrapper.find('.checkbox')).toHaveLength(checkboxes.length);
    })


    it('correct render Input', () => {

        expect(wrapper.find('.inputFilter')).toHaveLength(1);
    })


    it('correct render Button reset filters', () => {

        expect(wrapper.find('button').text()).toEqual('Reset Filters');
    })

    it('correct Button reset is disabled', () => {
        expect(wrapper.find('button').text()).toEqual('Reset Filters');
        expect(wrapper.find('button').prop('disabled')).toBe(true)
    })

    it('correct Button reset is not disabled', () => {
        expect(wrapper.find('button').text()).toEqual('Reset Filters');
        wrapper
            .find('input[type="checkbox"]')
            .at(0)
            .simulate('change', {target: {checked: true}})

        expect(wrapper.find('button').prop('disabled')).toBe(false)
    })

    it('correct render Conference Cards', () => {
        expect(wrapper.find('.card')).toHaveLength(7);
    })


    it('check filter working #1 - toggle checkboxes: RU', () => {

        wrapper
            .find('input[type="checkbox"]')
            .at(0)
            .simulate('change', {target: {checked: true}})

        expect(wrapper.find('.card')).toHaveLength(4);
        expect(wrapper.find('.card-level').at(0).text()).toMatch('RU')
        expect(wrapper.find('.card-level').at(1).text()).toMatch('RU')
        expect(wrapper.find('.card-level').at(2).text()).toMatch('RU')
        expect(wrapper.find('.card-level').at(3).text()).toMatch('RU')
    })


    it('check filter working #2 - toggle checkboxes: RU and HARDCORE', () => {

        wrapper
            .find('input[type="checkbox"]')
            .at(0)
            .simulate('change', {target: {checked: true}})

        wrapper
            .find('input[type="checkbox"]')
            .at(5)
            .simulate('change', {target: {checked: true}})

        expect(wrapper.find('.card')).toHaveLength(2);
        expect(wrapper.find('.card-level').at(0).text()).toEqual('HARDCORE / RU')
        expect(wrapper.find('.card-level').at(1).text()).toEqual('HARDCORE / RU')
    })


    it('check filter working #3 - toggle checkboxes: EN and ADVANCED and ACADEMIC', () => {

        wrapper
            .find('input[type="checkbox"]')
            .at(1)
            .simulate('change', {target: {checked: true}})

        wrapper
            .find('input[type="checkbox"]')
            .at(4)
            .simulate('change', {target: {checked: true}})

        wrapper
            .find('input[type="checkbox"]')
            .at(6)
            .simulate('change', {target: {checked: true}})

        expect(wrapper.find('.card')).toHaveLength(2);
        expect(wrapper.find('.card-level').at(0).text()).toEqual('ADVANCED / EN')
        expect(wrapper.find('.card-level').at(1).text()).toEqual('ACADEMIC / EN')
    })


    it('check filter working #4 - toggle checkboxes: HARDCODE and INTERMEDIATE', () => {

        wrapper
            .find('input[type="checkbox"]')
            .at(3)
            .simulate('change', {target: {checked: true}})

        wrapper
            .find('input[type="checkbox"]')
            .at(5)
            .simulate('change', {target: {checked: true}})


        expect(wrapper.find('.card')).toHaveLength(3);
        expect(wrapper.find('.card-level').at(0).text()).toEqual('INTERMEDIATE / EN')
        expect(wrapper.find('.card-level').at(1).text()).toEqual('HARDCORE / RU')
        expect(wrapper.find('.card-level').at(2).text()).toEqual('HARDCORE / RU')
    })


    it('check filter working #5 - toggle checkboxes: RU and INTERMEDIATE', () => {

        wrapper
            .find('input[type="checkbox"]')
            .at(0)
            .simulate('change', {target: {checked: true}})

        wrapper
            .find('input[type="checkbox"]')
            .at(3)
            .simulate('change', {target: {checked: true}})


        expect(wrapper.find('.card')).toHaveLength(0);
    })


    it('check filter working #6 - filter input value: "Дмитрий"', () => {


        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', {target: {value: 'Дмитрий'}})

        expect(wrapper.find('.card')).toHaveLength(2);

        expect(wrapper.find('.card-lector').at(0).text()).toEqual('Дмитрий Пацура')
        expect(wrapper.find('.card-lector').at(1).text()).toEqual('Дмитрий Волошин')
    })


    it('check filter working #7 - toggle checkboxes: RU and HARDCORE and filter input value: "Ом"', () => {

        wrapper
            .find('input[type="checkbox"]')
            .at(0)
            .simulate('change', {target: {checked: true}})

        wrapper
            .find('input[type="checkbox"]')
            .at(5)
            .simulate('change', {target: {checked: true}})

        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', {target: {value: 'Ом'}})

        expect(wrapper.find('.card')).toHaveLength(2);

        expect(wrapper.find('.card-title').at(0).text()).toEqual('Разработка компилятора для TypeScript на TypeScript на базе LLVM')
        expect(wrapper.find('.card-lector').at(1).text()).toEqual('Роман Дворнов')
    })


    it('check filter working #8 - toggle checkboxes: RU and filter input value: "ли" and click Reset button', () => {

        wrapper
            .find('input[type="checkbox"]')
            .at(0)
            .simulate('change', {target: {checked: true}})

        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', {target: {value: 'ли'}})

        expect(wrapper.find('.card')).toHaveLength(2);

        expect(wrapper.find('.card-title').at(0).text()).toEqual('GraphQL-фрагменты на клиенте: История появления, ошибки использования')
        expect(wrapper.find('.card-title').at(1).text()).toEqual('Может ли компьютер молиться на благо всех живых существ? Молитва на JavaScript и WebGL')

        wrapper
            .find('button')
            .simulate('click', {target: {}})

        expect(wrapper.find('.card')).toHaveLength(7);
    })

})
