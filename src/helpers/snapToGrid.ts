export const toSnappedCoords = (x: number, y: number, grid_h: number, grid_v: number): Position => {
    const h_count = Math.ceil(x / grid_h);
    const v_count = Math.ceil(y / grid_v);

    return { x: h_count * grid_h, y: v_count * grid_v };
};
