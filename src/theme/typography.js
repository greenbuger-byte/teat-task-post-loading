const baseStyle = (fontSize, fontWeight, lineHeight) => ({fontSize, fontWeight, lineHeight});

export const weight = {
    bold: `600`,
    regular: `400`,
    light: `200`,
}

export const H1 = {
    ...baseStyle(`1.9rem`, weight.bold, `1rem`),
    letterSpacing: `-0.02rem`,
}

export const H2 = {
    ...baseStyle(`1.6rem`, weight.bold, `1.8rem`),
    letterSpacing: `-0.02rem`,
}

export const P_R = {
    ...baseStyle(`1.3rem`, weight.regular, `1.6rem`),
    letterSpacing: `-0.02rem`,
}

export const P_B = {
    ...baseStyle(`1.3rem`, weight.bold, `1.6rem`),
    letterSpacing: `-0.02rem`,
}

export const Label_L = {
    ...baseStyle(`1.2rem`, weight.bold, `1rem`),
    letterSpacing: `-0.02rem`,
}