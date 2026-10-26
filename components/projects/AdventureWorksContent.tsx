import CaseIntro from "@/components/case/CaseIntro";
import CaseSection from "@/components/case/CaseSection";
import Infochart from "@/components/case/Infochart";
import NumberedGrid from "@/components/case/NumberedGrid";
import PullQuote from "@/components/case/PullQuote";
import StatStrip from "@/components/StatStrip";
import { withAccent } from "@/components/case/accent";
import { Box, C, Canvas, Lines, T, Wire } from "@/components/case/svg";
import type { Lang } from "@/lib/i18n";
import { copy } from "./AdventureWorks.copy";

const W = 1100;

export default function AdventureWorksContent({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <div>
      <CaseIntro lead={t.lead} facts={t.facts} tags={t.tags} links={t.links} />

      <CaseSection num={1} kicker={t.context.kicker} title={withAccent(t.context.title)}>
        <div className="grid grid-cols-1 gap-12 pt-6 md:grid-cols-2">
          <div>
            <h3 className="title mb-3">{t.context.problem.title}</h3>
            <p className="body mb-4" style={{ color: "var(--body)" }}>{t.context.problem.p1}</p>
            <p className="body" style={{ color: "var(--body)" }}>{t.context.problem.p2}</p>
          </div>
          <div>
            <h3 className="title mb-3">{t.context.why.title}</h3>
            <p className="body mb-4" style={{ color: "var(--body)" }}>
              <strong style={{ color: "var(--fg)" }}>{t.context.why.strong}</strong>
              {t.context.why.p1}
            </p>
            <p className="body" style={{ color: "var(--body)" }}>{t.context.why.p2}</p>
          </div>
        </div>
        <Infochart lang={lang} num={1} label={t.context.chart.label} title={t.context.chart.title} sub={t.context.chart.sub} minWidth={W}>
          <InventoryChart t={t.context.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={2} kicker={t.layers.kicker} title={withAccent(t.layers.title)} lead={t.layers.lead}>
        <Infochart lang={lang} num={2} label={t.layers.chart.label} title={t.layers.chart.title} sub={t.layers.chart.sub} minWidth={W}>
          <LayersChart t={t.layers.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={3} kicker={t.datasets.kicker} title={withAccent(t.datasets.title)} lead={t.datasets.lead}>
        <Infochart lang={lang} num={3} label={t.datasets.chart.label} title={t.datasets.chart.title} sub={t.datasets.chart.sub} minWidth={W}>
          <DatasetsChart t={t.datasets.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={4} kicker={t.star.kicker} title={withAccent(t.star.title)} lead={t.star.lead}>
        <Infochart lang={lang} num={4} label={t.star.chart.label} title={t.star.chart.title} sub={t.star.chart.sub} minWidth={W}>
          <StarChart t={t.star.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={5} kicker={t.tests.kicker} title={withAccent(t.tests.title)} lead={t.tests.lead}>
        <div className="pt-8">
          <StatStrip stats={t.tests.stats} label={t.tests.kicker} />
        </div>
        <Infochart lang={lang} num={5} label={t.tests.chart.label} title={t.tests.chart.title} sub={t.tests.chart.sub} minWidth={W}>
          <TestsChart t={t.tests.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={6} kicker={t.deliverables.kicker} title={withAccent(t.deliverables.title)} lead={t.deliverables.lead}>
        <div className="pt-8">
          <NumberedGrid items={t.deliverables.items} />
        </div>
      </CaseSection>

      <PullQuote>{withAccent(t.quote)}</PullQuote>
    </div>
  );
}

type Copy = (typeof copy)["en"];

/* Infochart 01: one bar per SAP domain, 30px per table; shared master data in fig-tile. */
function InventoryChart({ t }: { t: Copy["context"]["chart"] }) {
  const total = t.domains.reduce((n, d) => n + d.count, 0);
  return (
    <Canvas h={430} label={t.alt}>
      <T x={20} y={22} mono fill={C.muted}>{t.header}</T>
      <line x1={20} y1={32} x2={1080} y2={32} stroke={C.line} />
      <T x={20} y={54} mono weight={600} fill={C.muted}>{t.columns.domain}</T>
      <T x={200} y={54} mono weight={600} fill={C.muted}>{t.columns.tables}</T>
      <T x={280} y={54} mono weight={600} fill={C.muted}>{t.columns.distribution}</T>
      <T x={760} y={54} mono weight={600} fill={C.muted}>{t.columns.samples}</T>
      <line x1={20} y1={64} x2={1080} y2={64} stroke={C.fg} />
      {t.domains.map((d, i) => {
        const y = 74 + i * 52;
        const shared = i === t.domains.length - 1;
        const fill = shared ? C.tile : C.fg;
        const ink = shared ? C.fg : C.bg;
        return (
          <g key={d.name}>
            <Box x={20} y={y} width={160} height={36} fill={fill} />
            <T x={100} y={y + 23} anchor="middle" weight={600} fill={ink}>{d.name}</T>
            <T x={200} y={y + 26} size={20} weight={600}>{d.count}</T>
            <Box x={280} y={y + 7} width={d.count * 30} height={22} fill={fill} />
            <T x={292} y={y + 23} size={12} weight={600} fill={ink}>{d.inBar}</T>
            <Lines x={760} y={d.samples.length > 1 ? y + 15 : y + 23} size={12} gap={16} fill={C.body} lines={d.samples} />
            {!shared && <line x1={20} y1={y + 46} x2={1080} y2={y + 46} stroke={C.line} />}
          </g>
        );
      })}
      <line x1={20} y1={390} x2={1080} y2={390} stroke={C.fg} />
      <T x={20} y={414} mono weight={600}>{t.total}</T>
      <T x={200} y={416} size={20} weight={600} fill={C.accent}>{total}</T>
    </Canvas>
  );
}

/* Square bullet + text, used for the "what happens here" lists. */
function Bullets({ x, y, items, fill = C.body, gap = 18 }: { x: number; y: number; items: string[]; fill?: string; gap?: number }) {
  return (
    <>
      {items.map((it, i) => (
        <g key={it}>
          <Box x={x} y={y + i * gap - 8} width={6} height={6} fill={fill} />
          <T x={x + 14} y={y + i * gap} size={12} fill={fill}>{it}</T>
        </g>
      ))}
    </>
  );
}

/* Infochart 02: three outlined layers and the marts column filled; the marts header is the one accent. */
function LayersChart({ t }: { t: Copy["layers"]["chart"] }) {
  const col = (x: number, w: number, name: string, tag: string, filled = false) => (
    <>
      <Box x={x} y={40} width={w} height={310} fill={filled ? C.fg : "none"} stroke={filled ? undefined : C.lineStrong} />
      <Box x={x} y={40} width={w} height={36} fill={filled ? C.accent : C.fg} />
      <T x={x + w / 2} y={63} anchor="middle" size={14} weight={600} fill={filled ? C.onAccent : C.bg}>{name}</T>
      <T x={x + w / 2} y={98} anchor="middle" mono fill={filled ? C.bg : C.muted}>{tag}</T>
      <line x1={x + 16} y1={108} x2={x + w - 16} y2={108} stroke={filled ? C.bg : C.line} strokeOpacity={filled ? 0.4 : 1} />
    </>
  );
  const layer = (x: number, w: number, l: Copy["layers"]["chart"]["staging"]) => (
    <>
      {col(x, w, l.name, l.tag)}
      <T x={x + 16} y={132} weight={600}>{t.whatHappens}</T>
      <Bullets x={x + 16} y={152} items={l.steps} />
      <T x={x + 16} y={232} weight={600}>{t.examples}</T>
      <Lines x={x + 16} y={252} mono gap={18} fill={C.body} lines={l.models} />
      <T x={x + w / 2} y={320} anchor="middle" mono weight={600} fill={C.muted}>{t.tests}</T>
      <T x={x + w / 2} y={338} anchor="middle" size={12} fill={C.body}>{l.tests}</T>
    </>
  );
  const m = t.marts;
  return (
    <Canvas h={414} label={t.alt}>
      {col(10, 190, t.source.name, t.source.tag)}
      <Lines x={26} y={132} size={12} gap={18} fill={C.body} lines={[...t.source.tables, t.source.more]} />
      <T x={105} y={320} anchor="middle" mono weight={600} fill={C.muted}>{t.audience}</T>
      <T x={105} y={338} anchor="middle" size={12} fill={C.body}>{t.source.audience}</T>
      <Wire x1={204} y1={190} x2={222} y2={190} arrow />

      {layer(226, 240, t.staging)}
      <Wire x1={470} y1={190} x2={488} y2={190} arrow />
      {layer(492, 240, t.intermediate)}
      <Wire x1={736} y1={190} x2={754} y2={190} arrow />

      {col(758, 332, m.name, m.tag, true)}
      <T x={774} y={132} weight={600} fill={C.bg}>{m.facts}</T>
      <T x={774} y={152} mono fill={C.bg}>{m.fact}</T>
      <T x={774} y={170} size={12} fill={C.bg}>{m.grain}</T>
      <T x={774} y={196} weight={600} fill={C.bg}>{m.dimsTitle}</T>
      <Lines x={774} y={216} mono gap={18} fill={C.bg} lines={m.dims} />
      <T x={924} y={320} anchor="middle" mono weight={600} fill={C.bg}>{t.audience}</T>
      <T x={924} y={338} anchor="middle" size={12} fill={C.bg}>{m.audience}</T>

      <T x={10} y={386} mono weight={600} fill={C.muted}>{t.direction.title}</T>
      <Wire x1={214} y1={381} x2={1088} y2={381} arrow />
      <T x={214} y={402} size={12} fill={C.body}>{t.direction.from}</T>
      <T x={1088} y={402} anchor="end" size={12} fill={C.body}>{t.direction.to}</T>
    </Canvas>
  );
}

/* Infochart 03: four datasets inside one project; marts, the BI contract, filled. */
function DatasetsChart({ t }: { t: Copy["datasets"]["chart"] }) {
  const cols = [
    { x: 40, w: 234 },
    { x: 290, w: 212 },
    { x: 518, w: 212 },
    { x: 746, w: 314 },
  ];
  return (
    <Canvas h={410} label={t.alt}>
      <Box x={20} y={20} width={1060} height={370} stroke={C.line} />
      <Box x={20} y={20} width={1060} height={34} fill={C.fg} />
      <T x={40} y={42} size={14} weight={600} fill={C.bg}>{t.project}</T>
      <T x={1060} y={42} anchor="end" mono fill={C.bg}>{t.managed}</T>
      {t.sets.map((s, i) => {
        const { x, w } = cols[i];
        const marts = i === t.sets.length - 1;
        const raw = i === 0;
        const ink = marts ? C.bg : C.fg;
        return (
          <g key={s.name}>
            <Box x={x} y={72} width={w} height={298} fill={marts ? C.fg : "none"} stroke={marts ? undefined : C.lineStrong} />
            <T x={x + w / 2} y={94} anchor="middle" mono fill={marts ? C.bg : C.muted}>{t.dataset}</T>
            <T x={x + w / 2} y={114} anchor="middle" mono weight={600} size={13} fill={ink}>{s.name}</T>
            <T x={x + w / 2} y={136} anchor="middle" mono fill={marts ? C.bg : C.muted}>{s.tag}</T>
            <line x1={x + 15} y1={146} x2={x + w - 15} y2={146} stroke={marts ? C.bg : C.line} strokeOpacity={marts ? 0.4 : 1} />
            <Lines
              x={x + 15}
              y={166}
              gap={marts ? 20 : 18}
              mono={!raw}
              size={marts ? 13 : 12}
              weight={marts ? 600 : undefined}
              fill={raw ? C.body : ink}
              lines={s.more ? [...s.items, s.more] : s.items}
            />
            {marts && <Lines x={x + w / 2} y={300} anchor="middle" size={12} fill={C.bg} lines={t.martsNote} />}
            <T x={x + w / 2} y={354} anchor="middle" mono fill={marts ? C.bg : C.muted}>{s.foot}</T>
          </g>
        );
      })}
    </Canvas>
  );
}

/* Infochart 04: fct_sales filled in the centre; dimensions outlined with a tile header; dashed wire joins. */
function StarChart({ t }: { t: Copy["star"]["chart"] }) {
  const dim = (x: number, y: number, h: number, d: { name: string; cols: string[] }) => (
    <g key={d.name}>
      <Box x={x} y={y} width={300} height={h} stroke={C.lineStrong} />
      <Box x={x} y={y} width={300} height={28} fill={C.tile} />
      <T x={x + 150} y={y + 19} anchor="middle" mono weight={600}>{d.name}</T>
      <Lines x={x + 18} y={y + 50} mono gap={18} fill={C.body} lines={d.cols} />
    </g>
  );
  const join = (x1: number, y1: number, x2: number, y2: number) => (
    <Wire x1={x1} y1={y1} x2={x2} y2={y2} dash="4 3" />
  );
  const f = t.fact;
  return (
    <Canvas h={500} label={t.alt}>
      {dim(400, 14, 120, t.dims.customer)}
      {dim(790, 178, 144, t.dims.product)}
      {dim(10, 178, 144, t.dims.territory)}
      {dim(790, 358, 124, t.dims.date)}
      {dim(10, 358, 124, t.dims.employee)}

      {join(550, 134, 550, 178)}
      {join(790, 250, 720, 250)}
      {join(310, 250, 380, 250)}
      {join(790, 400, 720, 322)}
      {join(310, 400, 380, 322)}

      <Box x={380} y={178} width={340} height={144} fill={C.fg} />
      <T x={550} y={202} anchor="middle" mono size={16} weight={600} fill={C.bg}>{f.name}</T>
      <T x={550} y={222} anchor="middle" mono fill={C.bg}>{f.grain}</T>
      <line x1={398} y1={232} x2={702} y2={232} stroke={C.bg} strokeOpacity={0.4} />
      <Lines x={398} y={252} mono gap={18} fill={C.bg} lines={f.keysLeft} />
      <Lines x={560} y={252} mono gap={18} fill={C.bg} lines={f.keysRight} />
      <T x={550} y={312} anchor="middle" size={12} fill={C.bg}>{f.measures}</T>

      <Wire x1={360} y1={446} x2={392} y2={446} dash="4 3" />
      <T x={402} y={450} fill={C.body}>{t.legend.join}</T>
      <T x={360} y={474} size={12} fill={C.muted}>{t.legend.keys}</T>
    </Canvas>
  );
}

/* Infochart 05: test types per layer as tiles; marts in fig-accent-2; the docs note is the one surface callout. */
function TestsChart({ t }: { t: Copy["tests"]["chart"] }) {
  const chipW = (s: string) => s.length * 7.7 + 16;
  return (
    <Canvas h={410} label={t.alt}>
      <T x={20} y={24} mono fill={C.muted}>{t.header}</T>
      <line x1={20} y1={34} x2={1080} y2={34} stroke={C.line} />
      <T x={20} y={56} mono weight={600} fill={C.muted}>{t.columns.layer}</T>
      <T x={200} y={56} mono weight={600} fill={C.muted}>{t.columns.types}</T>
      <T x={640} y={56} mono weight={600} fill={C.muted}>{t.columns.coverage}</T>
      <T x={880} y={56} mono weight={600} fill={C.muted}>{t.columns.proves}</T>
      <line x1={20} y1={64} x2={1080} y2={64} stroke={C.fg} />
      {t.rows.map((r, i) => {
        const y0 = 76 + i * 88;
        const marts = i === t.rows.length - 1;
        const fill = marts ? C.accent2 : C.fg;
        let cx = 200;
        return (
          <g key={r.name}>
            <Box x={20} y={y0} width={160} height={64} fill={fill} />
            <T x={100} y={y0 + 28} anchor="middle" size={14} weight={600} fill={C.bg}>{r.name}</T>
            <T x={100} y={y0 + 48} anchor="middle" mono fill={C.bg}>{r.tag}</T>
            {r.types.map((ty) => {
              const x = cx;
              const w = chipW(ty);
              cx += w + 8;
              return (
                <g key={ty}>
                  <Box x={x} y={y0 + 2} width={w} height={22} fill={C.tile} />
                  <T x={x + w / 2} y={y0 + 17} anchor="middle" mono>{ty}</T>
                </g>
              );
            })}
            <Lines x={200} y={y0 + 44} size={12} gap={16} fill={C.body} lines={r.desc} />
            <Box x={640} y={y0 + 6} width={220} height={10} stroke={C.line} sw={1} />
            <Box x={640} y={y0 + 6} width={220 * r.share} height={10} fill={fill} />
            <Lines x={640} y={y0 + 36} size={12} gap={16} fill={C.body} lines={r.coverage} />
            <Lines x={880} y={y0 + 16} gap={18} fill={C.body} lines={r.proves} />
            <line x1={20} y1={y0 + 78} x2={1080} y2={y0 + 78} stroke={C.line} />
          </g>
        );
      })}
      <Box x={20} y={340} width={1060} height={58} fill={C.surface} stroke={C.line} sw={1} />
      <T x={40} y={364} mono weight={600}>{t.docs.command}</T>
      <T x={178} y={364} fill={C.body}>{t.docs.line1}</T>
      <T x={40} y={386} fill={C.body}>{t.docs.line2}</T>
    </Canvas>
  );
}
