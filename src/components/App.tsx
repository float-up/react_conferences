import React, {useContext, useEffect} from 'react';
import ConfsStore from "../store/ConfsStore";
import {ConferenceCard} from './ConferenceCard';
import Input from "./Input";
import {Checkbox} from "./Checkbox";
import {Button} from "./Button";
import {Loader} from "./Loader";
import {observer} from "mobx-react-lite";
import checkboxes from '../utils/checkboxes.json';

const App = () => {

    const confsStore = useContext(ConfsStore);
    const {
        confs,
        loading,
        isNotFilers,
        checkboxesLang,
        checkboxesLevel,
        setFilterInput,
        toggleCheckboxLevel,
        toggleCheckboxLang,
        resetFilters,
        getConfs,
    } = confsStore;

    useEffect(() => {
        getConfs();
    }, [getConfs])

    return (
        <div className="App">
            <nav>
                <div className="nav-wrapper orange lighten-3">
                    <a href="https://jug.ru" className="brand-logo center">JUG.RU Confs</a>
                </div>
            </nav>
            <div className="container">

                <div className="checkboxes">
                    {checkboxes.map((cb, index) =>
                        <Checkbox
                            text={cb.title}
                            onChange={cb.type === 'lang' ? toggleCheckboxLang : toggleCheckboxLevel}
                            key={index}
                            checked={[...checkboxesLevel, ...checkboxesLang].includes(cb.title)}
                        />)
                    }
                </div>

                <div className="row">
                    <div className="col s10">
                        <Input placeholder="Search" onChange={setFilterInput}/>
                    </div>
                    <div className="col s2">
                        <Button text="Reset Filters" onClick={resetFilters} disable={isNotFilers}/>
                    </div>
                </div>
                <div className="row">
                    {loading ? <Loader /> : confs.length ?
                        confs.map(conf => <div className="col s6" key={conf.id}><ConferenceCard confInfo={conf}/></div>) :
                        <h4>Nothing to show</h4>
                    }
                </div>
            </div>
        </div>
    );
}

export default observer(App);
