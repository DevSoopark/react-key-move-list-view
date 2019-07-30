import * as React from 'react';
import { IContent } from '../../../types';
import './style.scss';

interface IContentProps {
  content: IContent
  currentIndex: number | string;
  width?: string;
  height?: string;
}

const Content = (props: IContentProps) => {
  const {index, image, title, description} = props.content;
  const contentStyle = {
    'width' : `${props.width}`,
    'height' : `${props.height}`,
    'transform' : `scale(${props.currentIndex == index ? 1 : 0.9})`
  }
  return (
    <div className = "content" style = {contentStyle}>
      <div className = "image-wrapper">
        <img src={image} alt={title} style = {{width : `${props.width}px`, height: `${props.height}px`}}/>
        <p className="details" style = {{width: `${props.width}px`, height: `${Number(props.height)/3}px`}}>
          <span className="title">
            {title}
          </span>
          <span className="description">
            {description}
          </span>
        </p>
      </div>
    </div>
  );
};
export default Content;