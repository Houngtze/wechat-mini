// @ts-ignore
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './panel.scss'

export default class Panel extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.setState({
      list: props.list,
      type: props.type
    })
  }
  state = {
    list: [],
    type: ""
  }

  selectItem (data) {
    this.props.handleSelect({
      data,
      type: this.state.type
    })
  }

  render () {
    const { list } = this.state
    return (
      <View className="panel">
        {
          list.length && list.map((item:any) => {
            return <Text key={item.value} onClick={() => this.selectItem(item)}>{item.label}</Text>
          })
        }
      </View>
    )
  }
}
