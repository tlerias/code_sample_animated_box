import { createComponent } from '@redacted/design-system-core';

const svgRules = () => ({
    verticalAlign: 'top',
    boxSizing: 'content-box',
});

const getAnimationConfig = () => '4s 1 linear';

// Confetti
// Green 1 (far left)
const animateGreen1 = () => ({
    '0%': { opacity: 0 },
    '20%': { opacity: 0 },
    '25%': { opacity: 1, transform: 'translate(0)' },
    '36%': { opacity: 0, transform: 'translate(-74px, -32px)' },
    '100%': { opacity: 0 },
});

const green1AnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateGreen1)} ${getAnimationConfig()}`,
    opacity: 0,
});

export const AnimatedGreenConfetti1 = createComponent(green1AnimationRules, 'g');

// Confetti
// Green 2 (2nd from left)
const animateGreen2 = () => ({
    '0%': { opacity: 0 },
    '21%': { opacity: 0 },
    '26%': { opacity: 1, transform: 'translate(0)' },
    '37%': { opacity: 0, transform: 'translate(-31px, -50px)' },
    '100%': { opacity: 0 },
});

const green2AnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateGreen2)} ${getAnimationConfig()}`,
    opacity: 0,
});

export const AnimatedGreenConfetti2 = createComponent(green2AnimationRules, 'g');

// Confetti
// Green 3 (3rd from left)
const animateGreen3 = () => ({
    '0%': { opacity: 0 },
    '18%': { opacity: 0 },
    '24%': { opacity: 1, transform: 'translate(0)' },
    '34%': { opacity: 0, transform: 'translate(87px, -52px)' },
    '100%': { opacity: 0 },
});

const green3AnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateGreen3)} ${getAnimationConfig()}`,
    opacity: 0,
});

export const AnimatedGreenConfetti3 = createComponent(green3AnimationRules, 'g');

// Confetti
// Green 4 (last from left)
const animateGreen4 = () => ({
    '0%': { opacity: 0 },
    '22%': { opacity: 0 },
    '27%': { opacity: 1, transform: 'translate(0)' },
    '38%': { opacity: 0, transform: 'translate(143px, 24px)' },
    '100%': { opacity: 0 },
});

const green4AnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateGreen4)} ${getAnimationConfig()}`,
    opacity: 0,
});

export const AnimatedGreenConfetti4 = createComponent(green4AnimationRules, 'g');

// Confetti
// Orange 1 (first from left)
const animateOrange1 = () => ({
    '0%': { opacity: 0 },
    '18%': { opacity: 0 },
    '24%': { opacity: 1, transform: 'translate(0)' },
    '34%': { opacity: 0, transform: 'translate(-101px, 2px)' },
    '100%': { opacity: 0 },
});

const orange1AnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateOrange1)} ${getAnimationConfig()}`,
    opacity: 0,
});

export const AnimatedOrangeConfetti1 = createComponent(orange1AnimationRules, 'g');

// Confetti
// Orange 2 (second from left)
const animateOrange2 = () => ({
    '0%': { opacity: 0 },
    '20%': { opacity: 0 },
    '25%': { opacity: 1, transform: 'translate(0)' },
    '36%': { opacity: 0, transform: 'translate(-7px,-44px)' },
    '100%': { opacity: 0 },
});

const orange2AnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateOrange2)} ${getAnimationConfig()}`,
    opacity: 0,
});

export const AnimatedOrangeConfetti2 = createComponent(orange2AnimationRules, 'g');

// Confetti
// Orange 3 (third from left)
const animateOrange3 = () => ({
    '0%': { opacity: 0 },
    '24%': { opacity: 0 },
    '29%': { opacity: 1, transform: 'translate(0)' },
    '40%': { opacity: 0, transform: 'translate(28px, -60px)' },
    '100%': { opacity: 0 },
});

const orange3AnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateOrange3)} ${getAnimationConfig()}`,
    opacity: 0,
});

export const AnimatedOrangeConfetti3 = createComponent(orange3AnimationRules, 'g');

// Confetti
// Orange 4 (last from left)
const animateOrange4 = () => ({
    '0%': { opacity: 0 },
    '18%': { opacity: 0 },
    '24%': { opacity: 1, transform: 'translate(0)' },
    '34%': { opacity: 0, transform: 'translate(130px, 65px)' },
    '100%': { opacity: 0 },
});

const orange4AnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateOrange4)} ${getAnimationConfig()}`,
    opacity: 0,
});

export const AnimatedOrangeConfetti4 = createComponent(orange4AnimationRules, 'g');

// Confetti
// Red 1 (first from left)
const animateRed1 = () => ({
    '0%': { opacity: 0 },
    '23%': { opacity: 0 },
    '28%': { opacity: 1, transform: 'translate(0)' },
    '39%': { opacity: 0, transform: 'translate(-80px, 26px)' },
    '100%': { opacity: 0 },
});

const red1AnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateRed1)} ${getAnimationConfig()}`,
    opacity: 0,
});

export const AnimatedRedConfetti1 = createComponent(red1AnimationRules, 'g');

// Confetti
// Red 2 (second from left)
const animateRed2 = () => ({
    '0%': { opacity: 0 },
    '23%': { opacity: 0 },
    '28%': { opacity: 1, transform: 'translate(0)' },
    '39%': { opacity: 0, transform: 'translate(-43px, -18px)' },
    '100%': { opacity: 0 },
});

const red2AnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateRed2)} ${getAnimationConfig()}`,
    opacity: 0,
});

export const AnimatedRedConfetti2 = createComponent(red2AnimationRules, 'g');

// Confetti
// Red 3 (third from left)
const animateRed3 = () => ({
    '0%': { opacity: 0 },
    '23%': { opacity: 0 },
    '28%': { opacity: 1, transform: 'translate(0)' },
    '39%': { opacity: 0, transform: 'translate(25px, -38px)' },
    '100%': { opacity: 0 },
});

const red3AnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateRed3)} ${getAnimationConfig()}`,
    opacity: 0,
});

export const AnimatedRedConfetti3 = createComponent(red3AnimationRules, 'g');

// Confetti
// Red 4 (last from left)
const animateRed4 = () => ({
    '0%': { opacity: 0 },
    '23%': { opacity: 0 },
    '28%': { opacity: 1, transform: 'translate(0)' },
    '39%': { opacity: 0, transform: 'translate(88px, 14px)' },
    '100%': { opacity: 0 },
});

const red4AnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateRed4)} ${getAnimationConfig()}`,
    opacity: 0,
});

export const AnimatedRedConfetti4 = createComponent(red4AnimationRules, 'g');

// Green Rays (lines above giftbox)
const animateGreenRays = () => ({
    '0%': { opacity: 0 },
    '36%': { opacity: 0 },
    '37%': { opacity: 1 },
    '100%': { opacity: 1 },
});

const greenRaysAnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateGreenRays)} ${getAnimationConfig()}`,
    opacity: 1,
});

export const AnimatedGreenRays = createComponent(greenRaysAnimationRules, 'g');

// Shadow (below giftbox)
const animateShadow = () => ({
    '0%': { opacity: 0, clipPath: 'ellipse(0 0)' },
    '10%': { opacity: 1, clipPath: 'ellipse(50% 50%)' },
    '17%': { clipPath: 'none' },
    '21%': { opacity: 1, clipPath: 'ellipse(50% 50%)' },
    '26%': { clipPath: 'ellipse(0 0)' },
    '100%': { opacity: 0, clipPath: 'ellipse(0 0)' },
});

const shadowAnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateShadow)} ${getAnimationConfig()}`,
    opacity: 0,
});

export const AnimatedShadow = createComponent(shadowAnimationRules, 'g');

// Giftbox
const animateGiftBox = () => ({
    '0%': { transform: 'translateY(503.0px)' },
    '17%': { transform: 'translateY(269.3px)' },
    '21%': { transform: 'translate(0)' },
    '100%': {},
});

const giftBoxAnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateGiftBox)} ${getAnimationConfig()}`,
    opacity: 1,
});

export const AnimatedGiftBox = createComponent(giftBoxAnimationRules, 'g');

const styles = {
    st0: () => ({ fill: '#2F2F2F' }),
    st1: () => ({ fill: '#8FC03E' }),
    st2: () => ({ fill: '#D1414B' }),
    st3: () => ({ fill: '#FF8945' }),
    st4: () => ({ fill: '#91C11E' }),
    st5: () => ({ fill: '#FFD88A' }),
    st6: () => ({
        fill: 'none',
        stroke: '#B18B3D',
        strokeWidth: 4,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
    }),
    st7: () => ({ fill: '#D8E3BD' }),
    st8: () => ({ fill: '#E6E6E5' }),
    st9: () => ({ fill: '#D8A94A' }),
    st10: () => ({
        display: 'none',
        fill: '#D85D66',
        stroke: '#B33841',
        strokeWidth: 4,
        strokeMiterlimit: 10,
    }),
    st11: () => ({ fill: '#D85D66', stroke: '#B33841', strokeWidth: 4, strokeMiterlimit: 10 }),
    st12: () => ({ fill: '#B33841', stroke: '#B33841', strokeWidth: 4, strokeMiterlimit: 10 }),
    st13: () => ({
        display: 'none',
        fill: '#B33841',
        stroke: '#B33841',
        strokeWidth: 4,
        strokeMiterlimit: 10,
    }),
    st14: () => ({ fill: '#FFFFFF' }),
};

export const Ellipse0 = createComponent(styles.st0, 'ellipse');
export const Path1 = createComponent(styles.st1, 'path');
export const Rect2 = createComponent(styles.st2, 'rect');
export const Path3 = createComponent(styles.st3, 'path');
export const Path4 = createComponent(styles.st4, 'path');
export const Path5 = createComponent(styles.st5, 'path');
export const Polygon5 = createComponent(styles.st5, 'polygon');
export const Path6 = createComponent(styles.st6, 'path');
export const Polyline6 = createComponent(styles.st6, 'polyline');
export const Line6 = createComponent(styles.st6, 'line');

export const Path7 = createComponent(styles.st7, 'path');
export const Path8 = createComponent(styles.st8, 'path');
export const Path9 = createComponent(styles.st9, 'path');
export const Path10 = createComponent(styles.st10, 'path');
export const Polygon10 = createComponent(styles.st10, 'polygon');
export const Ellipse11 = createComponent(styles.st11, 'ellipse');
export const Path11 = createComponent(styles.st11, 'path');
export const Path12 = createComponent(styles.st12, 'path');
export const Polygon13 = createComponent(styles.st13, 'polygon');
export const Path14 = createComponent(styles.st14, 'path');

// Clipping Mask
const animateClippingMask = () => ({
    '0%': { transform: 'scaleX(.1)' },
    '10%': { transform: 'scaleX(1)' },
    '17%': { transform: 'scaleX(1)' },
    '21%': { transform: 'scale(.5)' },
    '26%': { transform: 'scale(.1)' },
    '100%': { transform: 'scale(.1)' },
});

const clippingMaskAnimationRules = (props, { renderKeyframe }) => ({
    animation: `${renderKeyframe(animateClippingMask)} ${getAnimationConfig()}`,
    opacity: 1,
    transformOrigin: '50% bottom',
});

export const ClippingMask = createComponent(clippingMaskAnimationRules, 'g');
export const SVG = createComponent(svgRules, 'svg');

export default styles;
