import React from 'react';

const Passthrough = ({ children, ...props }: any) => <div {...props}>{children}</div>;

export const SectionTitle = Passthrough;
export const CustomTag = Passthrough;
export const Icon = Passthrough;
export const WaterMark = Passthrough;
export const CustomTooltip = Passthrough;

export default {
  SectionTitle,
  CustomTag,
  Icon,
  WaterMark,
  CustomTooltip,
};
