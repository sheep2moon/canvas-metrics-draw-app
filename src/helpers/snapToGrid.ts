export const toSnappedCoords = (x: number, y: number, grid_size: number): Position => {
    const h_count = Math.round(x / grid_size);
    const v_count = Math.round(y / grid_size);

    return { x: h_count * grid_size, y: v_count * grid_size };
};
