function compactSafe(arr: string[]) {
	if (arr.length > 3)
		return arr.slice(0, 3)
	return arr
}
