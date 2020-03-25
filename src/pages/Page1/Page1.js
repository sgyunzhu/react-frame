import React, {Component} from 'react';

import './page.scss';

import image from './images/brickpsert.jpg';
import JSONEditor from 'jsoneditor';

export default class Page1 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            defaultClass: 'container',
            name: 'sgyunzhu',
            Editor: {},
        }
    }

    editorJSON () {
        const {Editor} = this.state;
        const updatedJson = Editor.get();
        console.log('ssssJSON', updatedJson);
    }

    componentDidMount () {
        // create the editor
        const container = document.getElementById('jsoneditor')
        // 通过传回调函数大的方式去获取修改的json
        const options = {
            onChange: () => this.editorJSON()

        }
        const editor = new JSONEditor(container, options)
        // set json
        const initialJson = {
            'Array': [1, 2, 3],
            'Boolean': true,
            'Null': null,
            'Number': 123,
            'Object': {'a': 'b', 'c': 'd'},
            'String': 'Hello World'
        }
        editor.set(initialJson)
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
            Editor: editor,
        })
        // get json
        const updatedJson = editor.get();
        console.log('ssssJSON', updatedJson);
    }
    render () {
        const {defaultClass} = this.state;
        return (
            <div className={defaultClass}>
                this is page1
                <img src={image}/>
                <div id="jsoneditor" style={{ width: '400px', height: '400px'}}>JSON</div>
            </div>
        )
    }
}
