export const toSnappedCoords = (x: number, y: number, grid_size: number): Position => {
    const h_count = Math.ceil(x / grid_size);
    const v_count = Math.ceil(y / grid_size);

    return { x: h_count * grid_size, y: v_count * grid_size };
};
