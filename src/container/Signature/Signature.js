/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-12-24 10:59:15
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-24 16:05:25
 */
import React from 'react';
import Chapter from './Chapter';

class Signature extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chapterColor: 'blue',
			companyName: '北京百度股份有限公司2',
			text: '测试111',
			accrossTxt: 'ICO12334111',
			update:false
		}
	}
	chapterChange = (base64) => {
		console.log(base64);
	}
	render() {
		const { chapterColor, companyName, text, accrossTxt,update } = this.state;
		return (
			<div>
				<Chapter
					color={chapterColor}
					companyName={companyName}
					text={this.state.text}
					accrossTxt={this.state.accrossTxt}
					dispatch={this.props.dispatch}
					onChange={this.chapterChange}
					update={update} >
				</Chapter>
			</div>
		)

	}
}
export default Signature;