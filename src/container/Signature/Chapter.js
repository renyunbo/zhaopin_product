import React, { PropTypes } from 'react';

class Chapter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: this.props.color,
			companyName: this.props.companyName,
			text: this.props.text,
			accrossTxt: this.props.accrossTxt
		}
	}
	getChapter(color, companyName, text, accrossTxt, update) {
		const { dispatch, onChange = () => { } } = this.props;
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext('2d');
		var text = text;
		var companyName = companyName;
		var accrossTxt = accrossTxt;
		console.log('公司名称', companyName, companyName.length)
		console.log('下旋文字', text, text.length)
		let total = 0;

		context.clearRect(0, 0, 200, 200)  //清除画布   ---------
		//找中心
		var width = canvas.width / 2;   //100
		var height = canvas.height / 2; //100

		// 绘制印章边框
		context.lineWidth = 4;
		context.strokeStyle = color; //红色"#f00"
		context.beginPath();
		context.arc(width, height, 90, 0, Math.PI * 2);//中心,半径,起始角度，结束角度
		context.stroke();

		//画五角星
		create5star(context, width, height, 25, color, 0);

		total += Math.PI;
		console.log('total111111========', total)
		// 绘制印章名称
		context.textBaseline = 'middle';//设置文本的垂直对齐方式
		context.textAlign = 'center'; //设置文本的水平对对齐方式
		context.lineWidth = 1.5;
		context.strokeStyle = color;
		context.strokeText(accrossTxt, width, height + 60);

		// 绘制印章单位
		context.translate(width, height);// 平移到此位置,
		context.font = '23px 宋体'
		var count = companyName.length;// 字数                     1
		var angle = 4 * Math.PI / (3 * (count - 1));// 字间角度   		   0
		var chars = companyName.split("");
		var c;
		for (var i = 0; i < count; i++) {
			c = chars[i];// 需要绘制的字符
			if (i == 0) {
				context.rotate(5 * Math.PI / 6);
				total += 5 * Math.PI / 6;
			} else {
				context.rotate(angle);
				total += angle;
			}
			context.save();
			context.translate(70, 0);// 平移到此位置,此时字和x轴垂直，公司名称和最外圈的距离
			context.rotate(Math.PI / 2);// 旋转90度,让字平行于x轴
			total += Math.PI / 2;
			context.strokeText(c, 0, 0);// 此点为字的中心点 写文字用的
			context.restore();
		}

		//  context.translate(width, height);  下旋文字
		context.beginPath();
		context.font = '10px 宋体';
		var len = text.length;
		var deg = -1 * Math.PI / (3 * (len - 1));
		var small = text.split("");
		var a;
		// context.translate(width,height);
		for (var j = 0; j < len; j++) {   //画小字体
			a = small[j]
			context.save();
			if (j == 0) {
				context.rotate(0)
			} else {
				context.rotate(deg);
				total += deg;
				console.log('total2222----', total)
			}
			context.save();
			context.translate(0, 80);
			// context.rotate(Math.PI / 2);
			context.strokeText(a, 0, 0);
			context.restore();
		}
		// console.log(len,-total,len%2);
		context.rotate(-total);
		context.translate(-width, -height);//画图回到原来的位置  -----
		const src = canvas.toDataURL("image/png");
		// if(update){
		// console.log("src",src);
		onChange(src)
		// dispatch(sendDataUrl(src))
		// }
		// console.log(src);
		//绘制五角星
		/**
		* 创建一个五角星形状. 该五角星的中心坐标为(sx,sy),中心到顶点的距离为radius,rotate=0时一个顶点在对称轴上
		* rotate:绕对称轴旋转rotate弧度
		*/
		function create5star(context, sx, sy, radius, color, rotato) {
			context.save();
			context.fillStyle = color;
			context.translate(sx, sy);//移动坐标原点
			context.rotate(Math.PI + rotato);//旋转
			context.beginPath();//创建路径
			// var x = Math.sin(0);
			// var y = Math.cos(0);
			var dig = Math.PI / 5 * 4;
			for (var i = 0; i < 5; i++) {//画五角星的五条边
				var x = Math.sin(i * dig);
				var y = Math.cos(i * dig);
				context.lineTo(x * radius, y * radius);
			}
			context.closePath();
			context.stroke();
			context.fill();
			context.restore();
		}
	}
	componentDidMount() {
		const { color, companyName, text, accrossTxt, update } = this.props;

		this.getChapter(color, companyName, text, accrossTxt, update)
	}
	componentWillReceiveProps(nextProps) {
		this.getChapter(nextProps.color, nextProps.companyName, nextProps.text, nextProps.accrossTxt, nextProps.update)
	}

	render() {
		const { dispatch } = this.props;
		return (
			<canvas id="canvas" width="200" height="200"></canvas>
		)
	}
}
export default Chapter;
