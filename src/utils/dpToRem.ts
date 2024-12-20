export default function dpToRem(dp: number, dpi = 400, rootFontSize = 16) {
  const px = dp * (dpi / 400);
  return px / rootFontSize;
}
