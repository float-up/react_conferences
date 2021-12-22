import {ConfsStore} from "../ConfsStore";
import data from '../../../public/data.json'


const store = new ConfsStore();

const getConfs = jest.fn(() => {
    // @ts-ignore
    store.confsList = data;
})

describe('ConfsStore testing', () => {

    beforeEach(() => {
        // @ts-ignore
        store.confsList = [];
        store.checkboxesLang = [];
        store.checkboxesLevel = [];
        store.filterInput = '';
    })

    it('1. add one value to checkboxesLang array', () => {

        store.toggleCheckboxLang('RU');

        expect(store.checkboxesLang.length).toBe(1)
        expect(store.checkboxesLang[0]).toBe('RU')

    })

    it('2. add few value to checkboxesLang array', () => {

        store.toggleCheckboxLang('RU');
        store.toggleCheckboxLang('HOT');

        expect(store.checkboxesLang.length).toBe(2)
        expect(store.checkboxesLang[0]).toBe('RU')
        expect(store.checkboxesLang[1]).toBe('HOT')

    })

    it('3. add few value to checkboxesLang array and remove one of them', () => {

        store.toggleCheckboxLang('RU');
        store.toggleCheckboxLevel('HOT');

        expect(store.checkboxesLang.length).toBe(1)
        expect(store.checkboxesLevel.length).toBe(1)
        expect(store.checkboxesLang[0]).toBe('RU')
        expect(store.checkboxesLevel[0]).toBe('HOT')

        store.toggleCheckboxLevel('HOT');

        expect(store.checkboxesLang.length).toBe(1)
        expect(store.checkboxesLevel.length).toBe(0)
        expect(store.checkboxesLang[0]).toBe('RU')
    })


    it('4. add one value to checkboxesLevel array', () => {

        store.toggleCheckboxLevel('INTERMEDIATE');

        expect(store.checkboxesLevel.length).toBe(1)
        expect(store.checkboxesLevel[0]).toBe('INTERMEDIATE')

    })

    it('5. add few value to checkboxesLevel array', () => {

        store.toggleCheckboxLevel('INTERMEDIATE');
        store.toggleCheckboxLevel('HOT');

        expect(store.checkboxesLevel.length).toBe(2)
        expect(store.checkboxesLevel[0]).toBe('INTERMEDIATE')
        expect(store.checkboxesLevel[1]).toBe('HOT')

    })

    it('6. add few value to checkboxesLevel array and remove one of them', () => {

        store.toggleCheckboxLang('RU');
        store.toggleCheckboxLevel('HOT');

        expect(store.checkboxesLevel.length).toBe(1)
        expect(store.checkboxesLang.length).toBe(1)
        expect(store.checkboxesLang[0]).toBe('RU')
        expect(store.checkboxesLevel[0]).toBe('HOT')

        store.toggleCheckboxLevel('HOT');

        expect(store.checkboxesLevel.length).toBe(0)
        expect(store.checkboxesLang.length).toBe(1)
        expect(store.checkboxesLang[0]).toBe('RU')
    })


    it('7. add few value to checkboxesLang array and remove one of them', () => {

        store.toggleCheckboxLang('RU');
        store.toggleCheckboxLang('EN');

        expect(store.checkboxesLang.length).toBe(2)

        expect(store.checkboxesLang[0]).toBe('RU')
        expect(store.checkboxesLang[1]).toBe('EN')

        store.toggleCheckboxLang('RU');

        expect(store.checkboxesLang.length).toBe(1)
        expect(store.checkboxesLang[0]).toBe('EN')
    })



    it('8. set filter input value', () => {

        store.setFilterInput('Дмитрий');

        expect(store.filterInput).toBe("Дмитрий")

    })

    it('9. reset filters', () => {

        store.toggleCheckboxLevel('HOT');
        store.toggleCheckboxLang('RU')
        store.setFilterInput('LLVM')

        expect(store.checkboxesLang.length).toBe(1)
        expect(store.checkboxesLevel.length).toBe(1)
        expect(store.filterInput).toBe("LLVM")

        store.resetFilters();

        expect(store.checkboxesLang.length).toBe(0)
        expect(store.checkboxesLevel.length).toBe(0)
        expect(store.filterInput).toBe("")

    })


    it('10. get data', () => {
        getConfs();

        expect(store.confsList.length).toBe(7);
    })

    it('11. get filtered data, branch #1', () => {
        getConfs();
        store.toggleCheckboxLang('RU')
        store.toggleCheckboxLevel('HARDCORE')

        expect(store.confs.length).toBe(2)
    })

    it('12. get filtered data, branch #2', () => {
        getConfs();
        store.toggleCheckboxLang('RU')

        expect(store.confs.length).toBe(4)
    })

    it('13. get filtered data, branch #3', () => {
        getConfs();
        store.toggleCheckboxLang('RU')
        store.toggleCheckboxLevel('HARDCORE')
        store.setFilterInput('Дмитрий')

        expect(store.confs.length).toBe(1)
    })

    it('14. get filtered data, branch #4', () => {
        getConfs();
        store.toggleCheckboxLevel('HARDCORE')
        expect(store.confs.length).toBe(2)
    })


    it('15. get is not filter, branch #1', () => {
        store.toggleCheckboxLang('RU')
        expect(store.isNotFilers).toBe(false)

    })

    it('16. get is not filter, branch #2', () => {
        store.toggleCheckboxLevel('HARDCORE')
        expect(store.isNotFilers).toBe(false)
    })

    it('17. get is not filter, branch #3', () => {
        store.setFilterInput('Дмитрий')
        expect(store.isNotFilers).toBe(false)
    })
})
