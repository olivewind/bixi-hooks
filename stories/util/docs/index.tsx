import React from 'react';
import './index.less';

const Prism = require('prismjs');
require('prismjs/themes/prism.css');

export default class Docs extends React.Component<{ md: { default: string } }> {
  componentDidMount() {
    const eles = document.getElementsByClassName('language-jsx');
    for (let i = 0; i < eles.length; i++) {
      // 遍历操作
      const ele = eles[i];
      ele.innerHTML = Prism.highlight(ele.innerHTML.replace(/&gt;/g, '>').replace(/&lt;/g, '<'), Prism.languages.javascript, 'javascript');
    }
  }
  render() {
    return (
      <div className='markdown-body' style={{ padding: '20px' }} dangerouslySetInnerHTML={{ __html: this.props.md.default }}>

      </div>
    );
  }
}
