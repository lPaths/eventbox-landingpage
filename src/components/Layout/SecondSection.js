import React from 'react'
import { Row, Col } from 'antd'
import { TweenOneGroup } from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'

class SecondSection extends React.PureComponent {
  render() {
    const { secondSection } = this.props.textData

    const childrenToRender = secondSection.block.map(item => {
      return (
        <Col
          key={item.key} className='block'
          md={6} xs={24}
        >
          <div className='content5-block-content'>
            <span>
              <img src={item.imgLink} height='100%' alt='img' />
            </span>
            <p>{item.text}</p>
          </div>
        </Col>
      )
    })

    return (
      <div className='home-page-wrapper content5-wrapper'>
        <div className='home-page content5 jpl17zkbjcf-editor_css'>
          <div key='title' className='title-wrapper'>
            {secondSection.title.map(item =>
              React.createElement(
                item.name.indexOf('title') === 0 ? 'h1' : 'div',
                {
                  key: item.key,
                  className: item.name.indexOf('title') === 0 ? 'title-h1' : 'title-content'
                },
                typeof item.text === 'string' &&
                item.text.match(/\.(svg|gif|jpg|jpeg|png|JPG|PNG|GIF|JPEG)$/)
                  ? React.createElement('img', {
                      src: item.text,
                      alt: 'img',
                    })
                  : item.text
              )
            )}
          </div>
          <OverPack className={`content-template`} playScale={0.3}>
            <TweenOneGroup
              className='content5-img-wrapper'
              gutter={16}
              key='ul'
              enter={{
                y: '+=30',
                opacity: 0,
                type: 'from',
                ease: 'easeInOutQuad',
              }}
              leave={{ y: '+=30', opacity: 0, ease: 'easeInOutQuad' }}
              playScale={0.3}
              component={Row}
            >
              {childrenToRender}
            </TweenOneGroup>
          </OverPack>
        </div>
      </div>
    )
  }
}

export default SecondSection
