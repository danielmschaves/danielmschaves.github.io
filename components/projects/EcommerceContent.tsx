import CaseIntro from "@/components/case/CaseIntro";
import CaseSection from "@/components/case/CaseSection";
import Infochart from "@/components/case/Infochart";
import NumberedGrid from "@/components/case/NumberedGrid";
import PullQuote from "@/components/case/PullQuote";
import StatStrip from "@/components/StatStrip";
import { withAccent } from "@/components/case/accent";
import { Box, C, Canvas, Lines, T, Wire } from "@/components/case/svg";
import type { Lang } from "@/lib/i18n";
import { copy } from "./Ecommerce.copy";

const W = 1100;

export default function EcommerceContent({ lang }: { lang: Lang }) {
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
          <FlowChart t={t.context.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={2} kicker={t.schema.kicker} title={withAccent(t.schema.title)} lead={t.schema.lead}>
        <Infochart lang={lang} num={2} label={t.schema.chart.label} title={t.schema.chart.title} sub={t.schema.chart.sub} minWidth={W}>
          <SchemaChart t={t.schema.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={3} kicker={t.validation.kicker} title={withAccent(t.validation.title)} lead={t.validation.lead}>
        <Infochart lang={lang} num={3} label={t.validation.chart.label} title={t.validation.chart.title} sub={t.validation.chart.sub} minWidth={W}>
          <ValidationChart t={t.validation.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={4} kicker={t.sinks.kicker} title={withAccent(t.sinks.title)} lead={t.sinks.lead}>
        <Infochart lang={lang} num={4} label={t.sinks.chart.label} title={t.sinks.chart.title} sub={t.sinks.chart.sub} minWidth={W}>
          <SinksChart t={t.sinks.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={5} kicker={t.modules.kicker} title={withAccent(t.modules.title)} lead={t.modules.lead}>
        <div className="pt-8">
          <StatStrip stats={t.modules.stats} label={t.modules.kicker} />
        </div>
        <Infochart lang={lang} num={5} label={t.modules.chart.label} title={t.modules.chart.title} sub={t.modules.chart.sub} minWidth={W}>
          <ModulesChart t={t.modules.chart} />
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

/* Square bullet + text. */
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

/* Infochart 01: source and engine filled fg, the two Python stages outlined; the sink fan-out ends in the one accent. */
function FlowChart({ t }: { t: Copy["context"]["chart"] }) {
  const sinkY = [30, 128, 226];
  return (
    <Canvas h={340} label={t.alt}>
      <Box x={10} y={80} width={160} height={160} fill={C.fg} />
      <T x={90} y={126} anchor="middle" size={15} weight={600} fill={C.bg}>{t.source.name}</T>
      <T x={90} y={146} anchor="middle" fill={C.bg}>{t.source.sub}</T>
      <line x1={26} y1={160} x2={154} y2={160} stroke={C.bg} strokeOpacity={0.4} />
      <Lines x={90} y={182} anchor="middle" size={12} gap={18} fill={C.bg} lines={t.source.items} />
      <Wire x1={174} y1={160} x2={198} y2={160} arrow />

      {t.stages.map((s, i) => {
        const x = 202 + i * 212;
        return (
          <g key={s.file}>
            <Box x={x} y={80} width={180} height={160} stroke={C.lineStrong} />
            <Lines x={x + 90} y={106} anchor="middle" size={14} weight={600} lines={s.name} />
            <T x={x + 90} y={146} anchor="middle" mono fill={C.muted}>{s.file}</T>
            <line x1={x + 16} y1={156} x2={x + 164} y2={156} stroke={C.line} />
            <Lines x={x + 90} y={176} anchor="middle" size={12} gap={18} fill={C.body} lines={s.items} />
            <Wire x1={x + 184} y1={160} x2={x + 208} y2={160} arrow />
          </g>
        );
      })}

      <Box x={626} y={80} width={180} height={160} fill={C.fg} />
      <T x={716} y={126} anchor="middle" size={15} weight={600} fill={C.bg}>{t.engine.name}</T>
      <T x={716} y={146} anchor="middle" fill={C.bg}>{t.engine.sub}</T>
      <line x1={642} y1={160} x2={790} y2={160} stroke={C.bg} strokeOpacity={0.4} />
      <Lines x={716} y={182} anchor="middle" size={12} gap={18} fill={C.bg} lines={t.engine.items} />

      <line x1={806} y1={160} x2={820} y2={160} stroke={C.wire} strokeWidth={1.5} />
      <line x1={820} y1={sinkY[0] + 32} x2={820} y2={sinkY[2] + 32} stroke={C.wire} strokeWidth={1.5} />
      {t.sinks.map((s, i) => {
        const y = sinkY[i];
        const last = i === t.sinks.length - 1;
        return (
          <g key={s.name}>
            <Wire x1={820} y1={y + 32} x2={836} y2={y + 32} arrow />
            <Box x={838} y={y} width={250} height={64} fill={last ? C.accent : "none"} stroke={last ? undefined : C.lineStrong} />
            <T x={963} y={y + 22} anchor="middle" size={14} weight={600} fill={last ? C.onAccent : C.fg}>{s.name}</T>
            <Lines x={963} y={y + 40} anchor="middle" size={12} gap={16} fill={last ? C.onAccent : C.body} lines={s.lines} />
          </g>
        );
      })}
      <T x={20} y={322} mono weight={600} fill={C.muted}>{t.runtime}</T>
      <T x={290} y={322} mono>{t.flag}</T>
    </Canvas>
  );
}

/* Infochart 02: primary extractor targets have an fg header, the rest a tile header; dashed wires are FK joins. */
function SchemaChart({ t }: { t: Copy["schema"]["chart"] }) {
  const table = (x: number, y: number, h: number, d: { name: string; cols: string[]; rows: string }, primary: boolean) => (
    <g key={d.name}>
      <Box x={x} y={y} width={250} height={h} stroke={C.lineStrong} />
      <Box x={x} y={y} width={250} height={28} fill={primary ? C.fg : C.tile} />
      <T x={x + 125} y={y + 19} anchor="middle" mono weight={600} fill={primary ? C.bg : C.fg}>{d.name}</T>
      <Lines x={x + 14} y={y + 50} mono gap={18} fill={C.body} lines={d.cols} />
      <T x={x + 125} y={y + h - 14} anchor="middle" mono weight={600} fill={C.muted}>{d.rows}</T>
    </g>
  );
  const fk = (pts: string) => <polyline points={pts} fill="none" stroke={C.wire} strokeWidth={1.5} strokeDasharray="4 3" />;
  const tb = t.tables;
  return (
    <Canvas h={410} label={t.alt}>
      {table(10, 20, 170, tb.orders, true)}
      {table(10, 220, 170, tb.orderItems, true)}
      {table(290, 20, 170, tb.users, false)}
      {table(290, 220, 170, tb.products, false)}
      {table(570, 20, 170, tb.inventory, false)}
      {table(570, 220, 170, tb.events, false)}

      {/* order_items → orders, orders → users, order_items → products */}
      <Wire x1={135} y1={220} x2={135} y2={192} dash="4 3" arrow />
      <Wire x1={260} y1={88} x2={288} y2={88} dash="4 3" arrow />
      <Wire x1={260} y1={288} x2={288} y2={288} dash="4 3" arrow />
      {/* inventory_items → products */}
      {fk("640,190 640,204 470,204")}
      <Wire x1={470} y1={204} x2={470} y2={218} dash="4 3" arrow />
      {/* events → users */}
      {fk("570,262 556,262 556,140")}
      <Wire x1={556} y1={140} x2={542} y2={140} dash="4 3" arrow />

      <Box x={850} y={20} width={240} height={124} stroke={C.line} sw={1} />
      <T x={866} y={44} mono weight={600} fill={C.muted}>{t.legend.title}</T>
      <Box x={866} y={60} width={14} height={14} fill={C.fg} />
      <T x={890} y={72}>{t.legend.primary}</T>
      <Box x={866} y={86} width={14} height={14} fill={C.tile} />
      <T x={890} y={98}>{t.legend.secondary}</T>
      <Wire x1={862} y1={119} x2={884} y2={119} dash="4 3" />
      <T x={890} y={124}>{t.legend.fk}</T>
    </Canvas>
  );
}

/* Infochart 03: input → model → valid (solid) or invalid (dashed); the failing field is marked in accent. */
function ValidationChart({ t }: { t: Copy["validation"]["chart"] }) {
  const m = t.model;
  return (
    <Canvas h={430} label={t.alt}>
      {/* Input dict */}
      <Box x={10} y={20} width={290} height={210} stroke={C.lineStrong} />
      <Box x={10} y={20} width={290} height={28} fill={C.tile} />
      <T x={155} y={39} anchor="middle" weight={600}>{t.input.title}</T>
      <Lines x={26} y={74} mono gap={18} fill={C.body} lines={t.input.lines} />
      <T x={26} y={146} mono weight={600} fill={C.accent}>{t.input.nullLine}</T>
      <T x={26} y={166} size={12} weight={600} fill={C.accent}>{t.input.nullNote}</T>
      <T x={26} y={206} size={12} fill={C.body}>{t.input.note}</T>
      <Wire x1={302} y1={120} x2={328} y2={120} arrow />

      {/* Model */}
      <Box x={332} y={20} width={300} height={350} fill={C.fg} />
      <T x={482} y={40} anchor="middle" weight={600} fill={C.bg}>{m.title}</T>
      <line x1={348} y1={50} x2={616} y2={50} stroke={C.bg} strokeOpacity={0.4} />
      <T x={348} y={72} mono fill={C.bg}>{m.head}</T>
      <Lines x={372} y={92} mono gap={18} fill={C.bg} lines={m.fields} />
      <T x={348} y={222} weight={600} fill={C.bg}>{m.rulesTitle}</T>
      <Bullets x={348} y={244} items={m.rules} fill={C.bg} />
      <T x={348} y={334} mono fill={C.bg}>{m.config[0]}</T>
      <T x={372} y={352} mono fill={C.bg}>{m.config[1]}</T>

      {/* Outcomes */}
      <Wire x1={636} y1={96} x2={662} y2={96} arrow />
      <Box x={664} y={40} width={426} height={112} stroke={C.fg} />
      <T x={680} y={64} mono weight={600} fill={C.muted}>{t.valid.tag}</T>
      <T x={760} y={64} size={14} weight={600}>{t.valid.title}</T>
      <Lines x={680} y={90} mono gap={20} fill={C.body} lines={t.valid.lines} />

      <Wire x1={636} y1={290} x2={662} y2={290} arrow />
      <Box x={664} y={220} width={426} height={150} stroke={C.fg} strokeDasharray="5 4" />
      <T x={680} y={244} mono weight={600} fill={C.muted}>{t.invalid.tag}</T>
      <T x={760} y={244} size={14} weight={600}>{t.invalid.title}</T>
      <T x={680} y={272} mono fill={C.body}>{t.invalid.code[0]}</T>
      <T x={704} y={292} mono fill={C.body}>{t.invalid.code[1]}</T>
      <Bullets x={680} y={326} items={t.invalid.modes} fill={C.fg} gap={22} />

      <T x={550} y={412} anchor="end" mono weight={600} fill={C.muted}>{t.runtime}</T>
      <T x={562} y={412} mono>{t.flag}</T>
    </Canvas>
  );
}

/* Infochart 04: a comparison table; sink names on fg blocks, the interface note under a strong rule. */
function SinksChart({ t }: { t: Copy["sinks"]["chart"] }) {
  const cx = { format: 200, latency: 362, best: 500, config: 790 };
  return (
    <Canvas h={384} label={t.alt}>
      <T x={20} y={22} mono fill={C.muted}>{t.header}</T>
      <line x1={20} y1={32} x2={1080} y2={32} stroke={C.line} />
      <T x={20} y={54} mono weight={600} fill={C.muted}>{t.columns.sink}</T>
      <T x={cx.format} y={54} mono weight={600} fill={C.muted}>{t.columns.format}</T>
      <T x={cx.latency} y={54} mono weight={600} fill={C.muted}>{t.columns.latency}</T>
      <T x={cx.best} y={54} mono weight={600} fill={C.muted}>{t.columns.best}</T>
      <T x={cx.config} y={54} mono weight={600} fill={C.muted}>{t.columns.config}</T>
      <line x1={20} y1={64} x2={1080} y2={64} stroke={C.fg} />
      {t.rows.map((r, i) => {
        const y0 = 76 + i * 80;
        return (
          <g key={r.name}>
            <Box x={20} y={y0} width={160} height={64} fill={C.fg} />
            <T x={100} y={y0 + 28} anchor="middle" size={14} weight={600} fill={C.bg}>{r.name}</T>
            <T x={100} y={y0 + 48} anchor="middle" mono fill={C.bg}>{r.tag}</T>
            <T x={cx.format} y={y0 + 24} weight={600}>{r.format[0]}</T>
            <T x={cx.format} y={y0 + 42} size={12} fill={C.body}>{r.format[1]}</T>
            <T x={cx.latency} y={y0 + 24} weight={600}>{r.latency[0]}</T>
            <T x={cx.latency} y={y0 + 42} size={12} fill={C.body}>{r.latency[1]}</T>
            <Lines x={cx.best} y={y0 + 18} gap={18} fill={C.body} lines={r.best} />
            <Lines x={cx.config} y={y0 + 24} mono gap={18} lines={r.config} />
            <line x1={20} y1={y0 + 72} x2={1080} y2={y0 + 72} stroke={C.line} />
          </g>
        );
      })}
      <line x1={20} y1={324} x2={1080} y2={324} stroke={C.lineStrong} />
      <T x={20} y={348} weight={600}>{t.iface.name}</T>
      <Lines x={182} y={348} gap={20} fill={C.body} lines={t.iface.lines} />
    </Canvas>
  );
}

/* Infochart 05: main.py filled, four outlined modules with no wires between them; the rule is the one surface callout. */
function ModulesChart({ t }: { t: Copy["modules"]["chart"] }) {
  const xs = [20, 290, 560, 830];
  const from = [470, 520, 580, 630];
  return (
    <Canvas h={430} label={t.alt}>
      <Box x={400} y={20} width={300} height={86} fill={C.fg} />
      <T x={550} y={50} anchor="middle" mono size={16} weight={600} fill={C.bg}>{t.main.name}</T>
      <T x={550} y={72} anchor="middle" fill={C.bg}>{t.main.role}</T>
      <T x={550} y={92} anchor="middle" mono fill={C.bg}>{t.main.args}</T>
      {t.mods.map((m, i) => {
        const x = xs[i];
        return (
          <g key={m.name}>
            <Wire x1={from[i]} y1={106} x2={x + 125} y2={198} arrow />
            <Box x={x} y={200} width={250} height={124} stroke={C.lineStrong} />
            <T x={x + 125} y={228} anchor="middle" mono size={14} weight={600}>{m.name}</T>
            <T x={x + 125} y={248} anchor="middle" fill={C.muted}>{m.role}</T>
            <line x1={x + 16} y1={260} x2={x + 234} y2={260} stroke={C.line} />
            <Lines x={x + 16} y={280} size={12} gap={18} fill={C.body} lines={m.lines} />
          </g>
        );
      })}
      <Box x={20} y={348} width={1060} height={66} fill={C.surface} stroke={C.line} sw={1} />
      <T x={40} y={374} weight={600}>{t.rule.name}</T>
      <Lines x={160} y={374} gap={20} fill={C.body} lines={t.rule.lines} />
    </Canvas>
  );
}
