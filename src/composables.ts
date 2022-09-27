export function useSvgToUri(svg: Node) {
	const svgAsXML = new XMLSerializer().serializeToString(svg)

  return {
		dataUri: `data:image/svg+xml,${encodeURIComponent(svgAsXML)}`
	}
}