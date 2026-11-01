import { useRef, useState } from 'react';

const img = (name) => `/images/collage/${name}`;

const startingPieces = [
  { id: 'calder', print: true, label: 'Photo by Kevin: red Calder sculpture against glass towers', src: img('calder.jpg'), x: 0, y: 26, w: 15, r: -8, z: 0 },
  { id: 'dome', print: true, label: 'Photo by Kevin: Half Dome at sunset', src: img('dome.jpg'), x: 20, y: -9, w: 25, r: 4, z: 0 },
  { id: 'ocean', print: true, label: 'Photo by Kevin: long-exposure ocean at dusk', src: img('ocean.jpg'), x: 79, y: 27, w: 22, r: 7, z: 0 },
  { id: 'haystack', print: true, label: 'Photo by Kevin: Haystack Rock and its reflection', src: img('haystack.jpg'), x: 88, y: -7, w: 13, r: 8, z: 0 },
  { id: 'kevin', print: true, label: 'Portrait of Kevin smiling in front of a green gallery wall', src: img('kevin.jpg'), x: 54, y: -10, w: 17, r: -4, z: 5 },
  { id: 'jersey', label: 'Chicago Cubs jersey', src: img('jersey.png'), x: 58, y: -4, w: 30, r: 6, z: 1 },
  { id: 'leica', label: 'Leica M11 camera', src: img('leica.png'), x: 8, y: 2, w: 31, r: -7, z: 2 },
  { id: 'boot', label: 'Danner hiking boot', src: img('boot.png'), x: 13, y: 27, w: 29, r: 5, z: 3 },
  { id: 'winnie', label: "Winnie, Kevin's curly brown dog", src: img('winnie.png'), x: 35, y: 0, w: 26, r: -2, z: 4 },
  { id: 'fish', label: 'Bag of Swedish Fish', src: img('fish.png'), x: 26, y: 48, w: 15, r: -9, z: 5 },
  { id: 'bagel', label: 'Everything bagel', src: img('bagel.png'), x: 70, y: 38, w: 21, r: -6, z: 5 },
  { id: 'mug', label: 'Coffee mug', src: img('mug.png'), x: 54, y: 42, w: 17, r: 5, z: 6 },
  { id: 'ball', label: 'TaylorMade TP5x golf ball', src: img('ball.png'), x: 66, y: 32, w: 8, r: 12, z: 7 },
  { id: 'claude', label: 'Claude app icon', src: img('claude.png'), x: 31, y: 18, w: 8, r: -10, z: 7 },
  { id: 'figma', label: 'Figma app icon', src: img('figma.png'), x: 81, y: 6, w: 8, r: 11, z: 7 },
  { id: 'q1', label: 'Quote from Adrienne Lowe', quote: '“Kevin cares deeply for our customers and it shows.”', name: 'Adrienne Lowe', role: 'CTO, Public Service Alliance', avatar: img('adrienne.jpg'), x: 1, y: 66, w: 28, r: -3, z: 8 },
  { id: 'q2', label: 'Quote from Tony Goshko', quote: '“He handles everything you throw at him with a smile (smirk, really).”', name: 'Tony Goshko', role: 'Former manager', avatar: img('tony.jpg'), x: 69, y: 66, w: 28, r: 2, z: 9 },
];

const arrowSteps = { ArrowLeft: [-2, 0], ArrowRight: [2, 0], ArrowUp: [0, -2], ArrowDown: [0, 2] };

export default function Collage() {
  const [pieces, setPieces] = useState(startingPieces);
  const [dragging, setDragging] = useState(null);
  const topZ = useRef(20);
  const drag = useRef(null);

  const movePiece = (id, x, y) => {
    setPieces((all) => all.map((p) => (p.id === id ? { ...p, x, y } : p)));
  };

  const bringToFront = (id) => {
    topZ.current += 1;
    const z = topZ.current;
    setPieces((all) => all.map((p) => (p.id === id ? { ...p, z } : p)));
  };

  const onPointerDown = (e, p) => {
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    const stage = el.parentElement.getBoundingClientRect();
    drag.current = { id: p.id, sx: e.clientX, sy: e.clientY, ox: p.x, oy: p.y, sw: stage.width, sh: stage.height };
    bringToFront(p.id);
    setDragging(p.id);
  };

  const onPointerMove = (e, p) => {
    const d = drag.current;
    if (!d || d.id !== p.id) return;
    const cx = Math.min(window.innerWidth, Math.max(0, e.clientX));
    movePiece(p.id, d.ox + ((cx - d.sx) / d.sw) * 100, d.oy + ((e.clientY - d.sy) / d.sh) * 100);
  };

  const onPointerUp = () => {
    drag.current = null;
    setDragging(null);
  };

  const onKeyDown = (e, p) => {
    const step = arrowSteps[e.key];
    if (step) {
      e.preventDefault();
      movePiece(p.id, p.x + step[0], p.y + step[1]);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      bringToFront(p.id);
    }
  };

  return (
    <section className="Collage" aria-label="Personal collage. Drag the pieces around, or use the arrow keys.">
      {pieces.map((p) => (
        <button
          key={p.id}
          type="button"
          className={`Bit Bit--${p.id}${p.print ? ' Bit--print' : ''}${dragging === p.id ? ' is-dragging' : ''}`}
          aria-label={p.label}
          onPointerDown={(e) => onPointerDown(e, p)}
          onPointerMove={(e) => onPointerMove(e, p)}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={(e) => onKeyDown(e, p)}
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.w}%`, zIndex: p.z, rotate: `${p.r}deg` }}
        >
          {p.src && <img src={p.src} alt="" draggable="false" />}
          {p.quote && (
            <span className="Quote">
              <span className="QuoteHead">
                <img className="QuoteAvatar" src={p.avatar} alt="" draggable="false" />
                <span className="QuoteWho">
                  <span className="QuoteName">{p.name}</span>
                  <span className="QuoteRole">{p.role}</span>
                </span>
                <span className="QuoteIn" aria-hidden="true">in</span>
              </span>
              {p.quote}
            </span>
          )}
        </button>
      ))}
    </section>
  );
}
