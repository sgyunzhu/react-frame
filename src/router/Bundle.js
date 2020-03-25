/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
import React, {Component} from 'react'

class Bundle extends Component {
    constructor (props) {
        super(props);
        this.state = {
            mod: null,
        }
    }

    componentWillMount () {
        this.load(this.props)
    }

    componentWillReceiveProps (nextProps) {
        // eslint-disable-next-line react/prop-types
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load (props) {
        this.setState({
            mod: null
        });
        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }

    render () {
        return this.props.children(this.state.mod)
    }
}

export default Bundle
