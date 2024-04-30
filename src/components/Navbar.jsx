import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAdNJREFUSEvFlU+ITmEUxn8/koWVRClFE3tr2cxYmKWFsicWIiFDjBBChAU2zN5O2Y1iVtbWys6fImRloTjumd6vbtd373e/aSbv5t77vuee557nPOe5ssLLFc5Pb4CIyNg/+UFq7/d6By4rQERcBB6p3+oURkRkFerqxv4m4KB6s0n5PxVExAXgGvAWmFI/dfUpIrYAC8B24Jx6qx4/DGAr8AqYAE6rd0cAzACZ9F35oPedAHkYEVnyYfV6ed4PHAUmy8svgYfqs3J+HniifhlJUTMgIu5kJS1VXK4UdaWrwk4VRcQB4GlJcDUbX+6PAdmrXHvVF20gowDeADuBU+q9hnIGYphXpzsB6hqvD1Il19/AKmC9+qMBsBlIhX1XN7TlWKygA+AXsKYFIIXwGfiprusEaCsvIl4Du6okM1WS2y0ULahTS+3BPmBRikA2+QGwFjgOnCn70+r8kgAKfV0ynR3MylgAZdAOqTdqg3YC2F0SPQfm1LxmD1NRj3sNWkRsK96S15Pq/a5BioizQJpcWsWk+qEeP8yLZgvfaXZ71I8jANLs0rt29DK7UvKl4jVfG8pps+uN1UwcGdaP//PDGUbJsv7Rujgf96w3ReMmHsT/Be5OxhkcTrRyAAAAAElFTkSuQmCC"/>
        <div class="toggle-space">
          <input type="checkbox" id="mode-toggle" class="mode-checkbox" hidden />
          <label for="mode-toggle" class="toggle-button"></label>
      </div>

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjJJREFUSEu1lEuIjWEcxn9PJEmSKCtqctkpEjVKyoZsrCzE1LjkFjUiSSxF2BgyIZeFkoWVBSUliUbC7IgUUZhsrAiP96/31PHNN9/nHM67+uo95/+8/+cmOnzU4fm0BWD7HWDgLDAg6eNoD20X4BMwNQ/9CvRJOlMG0i7AfaAbGALm5cHXgTWSfjQDtQtwG1gOLANmZKrGp+8Lkjb+D4Bn+eXdkh7YDrBbwBhgpaSbDZCWN7A9GfgAjAOmSRqOYbYPA/uBQUmL/wVgKxCCPpK0qDHIdoj+FgiquiS9jruWNrA9AXgCzElbbJM00My37RsJeBWwRVJYuGWAK8Da/NJZkr4VAPalDY4AxyXt/WsA22MzLZsSz+H7JZIeF31vuwe4DFyUtKEWIA9enQQNAWfn4T2SrpWFyvb2JPxp4ISkPX8A2H6fVpuYOY4aiDMfmJS/HwLrJb0crRaS0KeAHcAuSf1FgOdZvOL/vwOHgKOSflYMD8OEc2aWush2rHQsifgC2Jxe8RkIjw9LCpDKYzv0OZcSfk/S0hE5sD0FiFaMNI6wYNV0212Z2qDzd7pLg2Z7J3AyURJU9AH9khp6lGLYXgBczSa4JKm3souahIrf3QF6k+XelFgyrHsAOJi3fhWmkPSlEiAubUeYwm7RO1G/g8BdIGp6bm7R4LnhsPPA7uLwyhzYnh6BAVZU8B+lt05S1Hfpqe0i22G74HlhzkVY8SkQSR6qc1gtQJ096+47DvALWHjEGasKOngAAAAASUVORK5CYII="/>
    </nav>
  )
}

export default Navbar