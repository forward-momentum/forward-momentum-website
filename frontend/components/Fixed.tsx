/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { Fragment } from "react";
import useDimensions from "react-use-dimensions";
import { Box } from 'theme-ui';

/**
 * Fix an element to the screen
 * and ensure content surrounding it is still visible
 * by matching its height
 */
const Fixed: React.FC<{
  fixedIf?: boolean;
  position?: "top" | "bottom";
  additionalCss?: any;
  children: (ref: any) => any
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>> = ({
  fixedIf = true,
  position = "top",
  children,
  additionalCss,
  ...props
}) => {
    const [ref, { height }] = useDimensions();

    const placeholder = (
      <div style={{ height }} />
    );

    return (
      <Fragment>
        {fixedIf && position === "bottom" && placeholder}
        {children(ref)}
        {fixedIf && position === "top" && placeholder}
        <style>{`
            h1[id]::before,
            h2[id]::before,
            h3[id]::before,
            h4[id]::before,
            h5[id]::before {
                content: '';
                display: block;
                height: ${height + 20}px;
                margin: -${height + 20}px 0 0;
            }
          `}
        </style>
      </Fragment>
    );
  };

export default Fixed;
