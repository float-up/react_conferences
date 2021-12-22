import {observable, action, computed} from 'mobx';
import {createContext} from "react";
import {IProgram} from "../../types/interfaces";
import data from '../../../public/data.json'


export class ConfsStore {
    @observable public confsList: Array<any> = data;
    @observable public filterInput: string = '';
    @observable public checkboxesLang: Array<string> = [];  // нажатые чекбоксы языков
    @observable public checkboxesLevel: Array<string> = []; // нажатые чекбоксы уровней
    @observable public loading: boolean = false;

    @action public getConfs = () => {

    }

    @action public toggleCheckboxLang = (code: string) => {
        this.checkboxesLang.includes(code) ?
            this.checkboxesLang.splice(this.checkboxesLang.indexOf(code), 1) :
            this.checkboxesLang.push(code)
    }

    @action public toggleCheckboxLevel = (level: string) => {
        this.checkboxesLevel.includes(level) ?
            this.checkboxesLevel.splice(this.checkboxesLevel.indexOf(level), 1) :
            this.checkboxesLevel.push(level);
    }

    @action public setFilterInput = (value: string) => {
        this.filterInput = value;
    }

    @action public resetFilters = () => {
        this.filterInput = '';
        this.checkboxesLevel = [];
        this.checkboxesLang = [];
    }

    @computed get confs() {
        // Если на каком-то из этапов фильтрации массив выбранных языков или уровней оказывается пустым,
        // то пропускаем фильтруемый массив дальше (возвращаем из filter - true)
        return this.confsList.filter(conf => this.checkboxesLang.length ? this.checkboxesLang.includes(conf.type.lang) : true)
            .filter(conf => this.checkboxesLevel.length ? this.checkboxesLevel.includes(conf.type.level) : true)
            .filter(conf => conf.title.toLowerCase().includes(this.filterInput.trim().toLowerCase()) ||
                conf.lector.toLowerCase().includes(this.filterInput.trim().toLowerCase()))
    }

    @computed get isNotFilers() {
        return !this.checkboxesLevel.length && !this.checkboxesLang.length && !this.filterInput.length
    }
}

export default createContext(new ConfsStore());


