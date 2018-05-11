import React, { Component } from "react";
import styled from "styled-components";

export default class RSGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {seleted:null}
    this.numbers = Array(props.cols * props.rows).fill(0);
  }

  render() {
    const Grid = styled.div`
      display: grid;
      width: ${props => (props.width ? props.width : "inherit")};
      height: ${props => (props.height ? props.height : "inherit")};
      grid-template-columns: ${props =>
        props.cols ? "repeat(" + props.cols + ",1fr);" : "repeat(1,1fr);"};
      grid-template-rows: ${props =>
        props.rows ? "repeat(" + props.rows + ",1fr);" : "repeat(1,1fr);"};
      grid-gap: ${props => (props.gap ? props.gap : "0")};
    `;
    const GridElement = styled.div`
      border-radius: 2px;
      box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.3);
      background: white;
    `;
    return (
      <Grid
        width={this.props.width}
        height={this.props.height}
        cols={this.props.cols}
        rows={this.props.rows}
        gap={this.props.gap}
      >
        {this.numbers.map((ele, i) => (
          <GridElement
            key={i}
            className={`RSGelement-${i}`}
            onClick={() => {
              this.setState({ seleted: i });
              this.props.onSelected(i, `RSGelement-${i}`);
            }}
            style={{
              boxShadow:
                this.state.seleted === i
                  ? "1px 2px 16px 0 rgba(0,0,0,0.3)"
                  : "1px 2px 4px 0 rgba(0,0,0,0.3)"
            }}
          />
        ))}
      </Grid>
    );
  }
}
