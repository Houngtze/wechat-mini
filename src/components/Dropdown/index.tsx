// @ts-ignore
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Panel from './Panel'
import './index.scss'

export default class Index extends Component {
  state = {
    area: { value: "", label: "请选择所在地区" },
    profession: { type: "", label: "请选择工作类型" },
    areaList: [
      { value: "", label: "全部"},
      { value: "1", label: "福田"},
      { value: "2", label: "龙岗"}
    ],
    animationData: {},
    isShowPanel: false,
  }

  duration:number = 300
  moving: boolean = false
  animation:any = Taro.createAnimation({
    duration: this.duration,
    timingFunction: 'ease'
  })

  showPanelDetail () {
    this.setState({
      isShowPanel: true
    })
  }

  hidePanelDetail () {
    this.setState({
      isShowPanel: false
    })
  }

  // 设置选择项
  handleSelect (data:any) {
    console.log(data)
    this.setState({
      [data.type]: data.data
    })
  }

  getFilterData () {
    
  }

  componentDidMount () {

  }

  render () {
    const { area, profession, areaList, animationData, isShowPanel } = this.state
    return (
      <View className='at-row drop-down'>
       <View className='at-col'>
          <Text onClick={this.showPanelDetail}>{area.label}</Text>
          <AtIcon value='map-pin' size='10' />
        </View>
        <View className='at-col'>
          <Text>{profession.label}</Text>
          <AtIcon value='filter' size='10' />
        </View>
        {
          isShowPanel && 
          <View className='model' onClick={this.hidePanelDetail}>
            <Panel animation={animationData} handleSelect={this.handleSelect.bind(this)} list={areaList} type='area' />
          </View>
        }
      </View>
    )
  }
}
