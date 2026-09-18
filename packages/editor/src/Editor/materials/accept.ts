/** ims-view-pc 叶子物料，可放入 Page / Container / Modal */
export const IMS_LEAF_MATERIALS = [
  'SectionTitle',
  'CustomTag',
  'Icon',
  'WaterMark',
  'CustomTooltip',
] as const;

export type ImsLeafMaterial = (typeof IMS_LEAF_MATERIALS)[number];

export const PAGE_DROP_ACCEPT = [
  'Button',
  'Container',
  'Modal',
  'Table',
  'Form',
  ...IMS_LEAF_MATERIALS,
] as string[];

export const CONTAINER_DROP_ACCEPT = [
  'Button',
  'Container',
  'Table',
  'Form',
  ...IMS_LEAF_MATERIALS,
] as string[];
