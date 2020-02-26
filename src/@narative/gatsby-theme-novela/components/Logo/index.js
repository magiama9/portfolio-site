import React from "react";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */
export default function Logo({ fill }) {
  return (
    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M59.9436 66.5868L48.7683 85.9798L37.5931 66.5868H59.9436ZM62.9374 64.8535H34.5872L48.7683 89.41L62.9374 64.8535Z" fill="#414042"/>
<path d="M79.3731 42.4665L90.5483 61.8595H68.1978L79.3731 42.4665ZM79.3731 39L65.1919 63.5564H93.5542L79.3731 39Z" fill="#414042"/>
<path d="M21 39L32.8904 60.7202L45.8837 39.5454L21 39Z" fill="#414042"/>
<path d="M48.7686 40.9031L61.2408 62.5021H36.2722L48.7686 40.9031Z" fill="#414042"/>
<path d="M64.4527 67.217L76.937 89.41H51.3745L64.0648 67.217H64.4527Z" fill="#414042"/>
<path d="M67.1555 65.8716L79.3731 87.7251L91.7604 65.8716H67.1555Z" fill="#414042"/>
</svg>
  );
}
