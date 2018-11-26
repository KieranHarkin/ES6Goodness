let inRing = 'Stone Cold';
let onSide = 'The Rock';

const status = () => console.log(`In Ring = ${inRing} - On Side = ${onSide}`);

status();

// Swap with destructuring

[inRing, onSide] = [onSide, inRing];

status();

