/**
 * @packageDocumentation
 * @module utils
 *
 * @note this file is recreated during build.
 */

const names =
  'alicebluef0f8ff antiquewhitefaebd7 aqua00ffff aquamarine7fffd4 azuref0ffff beigef5f5dc bisqueffe4c4 black000000 blanchedalmondffebcd blue0000ff blueviolet8a2be2 browna52a2a burlywooddeb887 cadetblue5f9ea0 chartreuse7fff00 chocolated2691e coralff7f50 cornflowerblue6495ed cornsilkfff8dc crimsondc143c cyan00ffff darkblue00008b darkcyan008b8b darkgoldenrodb8860b darkgraya9a9a9 darkgreen006400 darkgreya9a9a9 darkkhakibdb76b darkmagenta8b008b darkolivegreen556b2f darkorangeff8c00 darkorchid9932cc darkred8b0000 darksalmone9967a darkseagreen8fbc8f darkslateblue483d8b darkslategray2f4f4f darkslategrey2f4f4f darkturquoise00ced1 darkviolet9400d3 deeppinkff1493 deepskyblue00bfff dimgray696969 dimgrey696969 dodgerblue1e90ff firebrickb22222 floralwhitefffaf0 forestgreen228b22 fuchsiaff00ff gainsborodcdcdc ghostwhitef8f8ff goldffd700 goldenroddaa520 gray808080 green008000 greenyellowadff2f grey808080 honeydewf0fff0 hotpinkff69b4 indianredcd5c5c indigo4b0082 ivoryfffff0 khakif0e68c lavendere6e6fa lavenderblushfff0f5 lawngreen7cfc00 lemonchiffonfffacd lightblueadd8e6 lightcoralf08080 lightcyane0ffff lightgoldenrodyellowfafad2 lightgrayd3d3d3 lightgreen90ee90 lightgreyd3d3d3 lightpinkffb6c1 lightsalmonffa07a lightseagreen20b2aa lightskyblue87cefa lightslategray778899 lightslategrey778899 lightsteelblueb0c4de lightyellowffffe0 lime00ff00 limegreen32cd32 linenfaf0e6 magentaff00ff maroon800000 mediumaquamarine66cdaa mediumblue0000cd mediumorchidba55d3 mediumpurple9370db mediumseagreen3cb371 mediumslateblue7b68ee mediumspringgreen00fa9a mediumturquoise48d1cc mediumvioletredc71585 midnightblue191970 mintcreamf5fffa mistyroseffe4e1 moccasinffe4b5 navajowhiteffdead navy000080 oldlacefdf5e6 olive808000 olivedrab6b8e23 orangeffa500 orangeredff4500 orchidda70d6 palegoldenrodeee8aa palegreen98fb98 paleturquoiseafeeee palevioletreddb7093 papayawhipffefd5 peachpuffffdab9 perucd853f pinkffc0cb plumdda0dd powderblueb0e0e6 purple800080 rebeccapurple663399 redff0000 rosybrownbc8f8f royalblue4169e1 saddlebrown8b4513 salmonfa8072 sandybrownf4a460 seagreen2e8b57 seashellfff5ee siennaa0522d silverc0c0c0 skyblue87ceeb slateblue6a5acd slategray708090 slategrey708090 snowfffafa springgreen00ff7f steelblue4682b4 tand2b48c teal008080 thistled8bfd8 tomatoff6347 turquoise40e0d0 violetee82ee wheatf5deb3 whiteffffff whitesmokef5f5f5 yellowffff00 yellowgreen9acd32'

/**
 * Unpack color names
 * @returns Record of color names to RGB arrays
 */
export default function unpack(): Record<string, number[]> {
  const unpacked: Record<string, number[]> = {}
  for (const entry of names.split(' ')) {
    const k = parseInt(entry.slice(-6), 16)
    unpacked[entry.slice(0, -6)] = [(k >> 16) & 0xff, (k >> 8) & 0xff, k & 0xff]
  }
  return unpacked
}
