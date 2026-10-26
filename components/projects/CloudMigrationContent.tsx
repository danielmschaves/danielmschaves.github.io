import CaseIntro from "@/components/case/CaseIntro";
import CaseSection from "@/components/case/CaseSection";
import Infochart from "@/components/case/Infochart";
import NumberedGrid from "@/components/case/NumberedGrid";
import PullQuote from "@/components/case/PullQuote";
import StatStrip from "@/components/StatStrip";
import { withAccent } from "@/components/case/accent";
import { Badge, Box, C, Canvas, Lines, T, Wire } from "@/components/case/svg";
import type { Lang } from "@/lib/i18n";
import { copy } from "./CloudMigration.copy";

const W = 1100;

export default function CloudMigrationContent({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <div>
      <CaseIntro lead={t.lead} facts={t.facts} tags={t.tags} />

      <CaseSection num={1} kicker={t.context.kicker} title={withAccent(t.context.title)}>
        <div className="grid grid-cols-1 gap-12 pt-6 md:grid-cols-2">
          <div>
            <h3 className="title mb-3">{t.context.start.title}</h3>
            <p className="body mb-4" style={{ color: "var(--body)" }}>{t.context.start.p1}</p>
            <p className="body" style={{ color: "var(--body)" }}>{t.context.start.p2}</p>
          </div>
          <div>
            <h3 className="title mb-3">{t.context.mandate.title}</h3>
            <p className="body mb-4" style={{ color: "var(--body)" }}>
              <strong style={{ color: "var(--fg)" }}>{t.context.mandate.strong}</strong>
              {t.context.mandate.p1}
            </p>
            <p className="body" style={{ color: "var(--body)" }}>{t.context.mandate.p2}</p>
          </div>
        </div>
      </CaseSection>

      <CaseSection num={2} kicker={t.approach.kicker} title={withAccent(t.approach.title)} lead={t.approach.lead}>
        <Infochart lang={lang} num={1} label={t.approach.chart.label} title={t.approach.chart.title} sub={t.approach.chart.sub} minWidth={W}>
          <StepsChart t={t.approach.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={3} kicker={t.schedule.kicker} title={withAccent(t.schedule.title)} lead={t.schedule.lead}>
        <Infochart lang={lang} num={2} label={t.schedule.chart.label} title={t.schedule.chart.title} minWidth={W}>
          <GanttChart t={t.schedule.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={4} kicker={t.budget.kicker} title={withAccent(t.budget.title)} lead={t.budget.lead}>
        <div className="pt-8">
          <StatStrip stats={t.budget.stats} label={t.budget.kicker} />
        </div>
        <Infochart lang={lang} num={3} label={t.budget.chart.label} title={t.budget.chart.title} sub={t.budget.chart.sub} minWidth={W}>
          <ResourceChart t={t.budget.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={5} kicker={t.risk.kicker} title={withAccent(t.risk.title)}>
        <Infochart lang={lang} num={4} label={t.risk.chart.label} title={t.risk.chart.title} minWidth={W}>
          <RiskChart t={t.risk.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={6} kicker={t.governance.kicker} title={withAccent(t.governance.title)} lead={t.governance.lead}>
        <Infochart lang={lang} num={5} label={t.governance.chart.label} title={t.governance.chart.title} minWidth={W}>
          <GovernanceChart t={t.governance.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={7} kicker={t.deliverables.kicker} title={withAccent(t.deliverables.title)} lead={t.deliverables.lead}>
        <div className="pt-8">
          <NumberedGrid items={t.deliverables.items} />
        </div>
      </CaseSection>

      <PullQuote>{withAccent(t.quote)}</PullQuote>
    </div>
  );
}

type Copy = (typeof copy)["en"];

/* Infochart 01: five squares, the quality gate filled in accent. */
function StepsChart({ t }: { t: Copy["approach"]["chart"] }) {
  const xs = [100, 295, 490, 685, 880];
  return (
    <Canvas h={270} label={t.alt}>
      <T x={20} y={30} mono fill={C.muted}>{t.caption}</T>
      <line x1={20} y1={42} x2={1080} y2={42} stroke={C.line} />
      <T x={685} y={64} anchor="middle" mono weight={600} fill={C.accent}>{t.gate}</T>
      <Wire x1={685} y1={70} x2={685} y2={82} stroke={C.accent} />
      {t.steps.map((s, i) => {
        const gate = i === 3;
        const ink = gate ? C.onAccent : C.fg;
        return (
          <g key={s.tag}>
            <Box x={xs[i] - 48} y={82} width={96} height={96} fill={gate ? C.accent : C.bg} stroke={gate ? undefined : C.fg} />
            <T x={xs[i]} y={128} anchor="middle" size={24} weight={600} fill={ink}>{String(i + 1).padStart(2, "0")}</T>
            <T x={xs[i]} y={152} anchor="middle" mono fill={ink}>{s.tag}</T>
            <T x={xs[i]} y={210} anchor="middle" weight={600}>{s.title}</T>
            <Lines x={xs[i]} y={230} anchor="middle" fill={C.body} lines={s.lines} />
            {i < 4 && <Wire x1={xs[i] + 56} y1={130} x2={xs[i + 1] - 56} y2={130} arrow />}
          </g>
        );
      })}
    </Canvas>
  );
}

/* Infochart 02: 12-month Gantt. Month m (0–12) maps to x. */
function GanttChart({ t }: { t: Copy["schedule"]["chart"] }) {
  const mx = (m: number) => 300 + (m * 760) / 12;
  const bar = (m0: number, m1: number, y: number, fill: string, label?: string, ink = C.onAccent) => (
    <g key={`${m0}-${y}`}>
      <Box x={mx(m0)} y={y} width={mx(m1) - mx(m0)} height={18} fill={fill} />
      {label && <T x={(mx(m0) + mx(m1)) / 2} y={y + 13} anchor="middle" mono size={12} weight={600} fill={ink}>{label}</T>}
    </g>
  );
  const pairs: [number, number][] = [[3, 148], [3, 170], [4.5, 196], [4.5, 218], [6, 244], [6, 266], [7.5, 292], [7.5, 314], [9, 340]];
  const milestones = [1, 4, 9, 12];
  return (
    <Canvas h={560} label={t.alt}>
      {t.months.map((m, i) => (
        <T key={m} x={mx(i + 0.5)} y={20} anchor="middle" mono fill={C.muted}>{m}</T>
      ))}
      {[0, 3, 6, 9, 12].map((m) => (
        <line key={m} x1={mx(m)} y1={30} x2={mx(m)} y2={400} stroke={C.line} />
      ))}
      {t.quarters.map((q, i) => (
        <T key={q} x={mx(i * 3 + 1.5)} y={46} anchor="middle" mono weight={600}>{q}</T>
      ))}
      <line x1={mx(0)} y1={56} x2={mx(12)} y2={56} stroke={C.fg} />

      <T x={284} y={83} anchor="end" weight={600}>{t.rows.setup}</T>
      {bar(0, 2, 70, C.fg)}
      <T x={mx(1)} y={106} anchor="middle" size={12} fill={C.muted}>{t.setupNote}</T>

      <T x={284} y={135} anchor="end" weight={600}>{t.rows.useCases}</T>
      {bar(1, 4, 122, C.accent, t.pathfinder)}
      {pairs.map(([m, y], i) => bar(m, m + 1.75, y, C.accent, `UC${i + 2}`))}

      <T x={284} y={389} anchor="end" weight={600}>{t.rows.closure}</T>
      {bar(10.4, 12, 376, C.accent2)}

      {milestones.map((m, i) => (
        <g key={t.milestones[i].id}>
          <Badge cx={mx(m)} cy={426} size={14} fill={C.fg} />
          <T x={mx(m)} y={452} anchor="middle" mono weight={600}>{t.milestones[i].id}</T>
          <Lines x={mx(m)} y={470} anchor="middle" fill={C.body} lines={t.milestones[i].lines} />
        </g>
      ))}

      <T x={20} y={532} mono weight={600}>{t.legend.title}</T>
      <Box x={110} y={521} width={14} height={14} fill={C.fg} />
      <T x={132} y={533} fill={C.body}>{t.legend.setup}</T>
      <Box x={340} y={521} width={14} height={14} fill={C.accent} />
      <T x={362} y={533} fill={C.body}>{t.legend.sprint}</T>
      <Box x={560} y={521} width={14} height={14} fill={C.accent2} />
      <T x={582} y={533} fill={C.body}>{t.legend.hypercare}</T>
      <Badge cx={767} cy={528} size={14} fill={C.fg} />
      <T x={782} y={533} fill={C.body}>{t.legend.milestone}</T>
    </Canvas>
  );
}

/* Infochart 03: hours per role, with the throughput note as the one surface callout. */
function ResourceChart({ t }: { t: Copy["budget"]["chart"] }) {
  const widths = [440, 440, 84, 84];
  const fills = [C.fg, C.fg, C.accent, C.accent2];
  return (
    <Canvas h={290} label={t.alt}>
      <T x={20} y={24} mono fill={C.muted}>{t.caption}</T>
      {t.roles.map((r, i) => {
        const cy = 64 + i * 40;
        return (
          <g key={r.name}>
            <T x={230} y={cy + 5} anchor="end" weight={600}>{r.name}</T>
            <Box x={250} y={cy - 12} width={widths[i]} height={24} fill={fills[i]} />
            <T x={250 + widths[i] + 12} y={cy + 5} weight={600}>{r.value}</T>
          </g>
        );
      })}
      <line x1={250} y1={222} x2={800} y2={222} stroke={C.line} />
      <T x={230} y={256} anchor="end" weight={600}>{t.total}</T>
      <T x={250} y={258} size={24} weight={600}>{t.totalValue}</T>
      <T x={326} y={256} fill={C.body}>{t.totalNote}</T>
      <Box x={820} y={52} width={260} height={116} fill={C.surface} stroke={C.line} sw={1} />
      <T x={836} y={76} mono weight={600} fill={C.accent}>{t.note.title}</T>
      <Lines x={836} y={98} fill={C.body} lines={t.note.lines} />
    </Canvas>
  );
}

/* Infochart 04: risk register. Severity is a labelled square: filled = high, outlined = medium, tile = low. */
function RiskChart({ t }: { t: Copy["risk"]["chart"] }) {
  const sev = {
    high: { fill: C.fg, stroke: undefined, ink: C.bg },
    medium: { fill: C.bg, stroke: C.fg, ink: C.fg },
    low: { fill: C.tile, stroke: undefined, ink: C.bg },
  } as const;
  const cols = [76, 240, 500, 870];
  return (
    <Canvas h={556} label={t.alt}>
      {t.head.map((h, i) => (
        <T key={h} x={i === 0 ? 20 : cols[i]} y={26} mono weight={600}>{h}</T>
      ))}
      <line x1={20} y1={36} x2={1080} y2={36} stroke={C.fg} />
      {t.rows.map((r, i) => {
        const top = 56 + i * 112;
        const s = sev[r.severity];
        return (
          <g key={r.id}>
            <Badge cx={38} cy={top + 28} size={36} fill={s.fill} stroke={s.stroke} label={r.id} ink={s.ink} labelSize={16} />
            <Lines x={cols[0]} y={top + 22} weight={600} lines={r.domain} />
            <T x={cols[0]} y={top + 64} mono fill={C.muted}>{t.severity[r.severity]}</T>
            <T x={cols[1]} y={top + 22} weight={600}>{r.risk[0]}</T>
            <T x={cols[1]} y={top + 40} fill={C.body}>{r.risk[1]}</T>
            <Lines x={cols[2]} y={top + 18} fill={C.body} lines={r.mitigation} />
            <Lines x={cols[3]} y={top + 22} weight={600} lines={r.target} />
            <line x1={20} y1={top + 100} x2={1080} y2={top + 100} stroke={C.line} />
          </g>
        );
      })}
      <T x={20} y={532} mono weight={600}>{t.legend.title}</T>
      <Badge cx={177} cy={528} size={14} fill={sev.high.fill} />
      <T x={192} y={532} mono fill={C.body}>{t.severity.high}</T>
      <Badge cx={257} cy={528} size={14} fill={sev.medium.fill} stroke={sev.medium.stroke} />
      <T x={272} y={532} mono fill={C.body}>{t.severity.medium}</T>
      <Badge cx={355} cy={528} size={14} fill={sev.low.fill} />
      <T x={370} y={532} mono fill={C.body}>{t.severity.low}</T>
      <T x={430} y={532} fill={C.body}>— {t.legend.note}</T>
    </Canvas>
  );
}

/* Infochart 05: two tiers of three boxes; the middle box of each tier is the filled one. */
function GovernanceChart({ t }: { t: Copy["governance"]["chart"] }) {
  const topX = [100, 460, 820];
  const botX = [40, 440, 840];
  return (
    <Canvas h={440} label={t.alt}>
      <Box x={20} y={20} width={1060} height={34} fill={C.fg} />
      <T x={40} y={42} mono weight={600} fill={C.bg}>{t.strategic}</T>
      {t.top.map((b, i) => {
        const on = i === 1;
        return (
          <g key={b.title}>
            <Box x={topX[i]} y={80} width={180} height={84} fill={on ? C.fg : C.bg} stroke={on ? undefined : C.fg} />
            <T x={topX[i] + 90} y={108} anchor="middle" size={14} weight={600} fill={on ? C.bg : C.fg}>{b.title}</T>
            <Lines x={topX[i] + 90} y={130} anchor="middle" fill={on ? C.bg : C.body} lines={b.lines} />
          </g>
        );
      })}
      <Wire x1={280} y1={122} x2={460} y2={122} />
      <Wire x1={640} y1={122} x2={820} y2={122} />

      <line x1={20} y1={200} x2={1080} y2={200} stroke={C.line} strokeDasharray="4 4" />

      <Box x={20} y={226} width={1060} height={34} fill={C.accent} />
      <T x={40} y={248} mono weight={600} fill={C.onAccent}>{t.operational}</T>
      {t.bottom.map((b, i) => {
        const on = i === 1;
        return (
          <g key={b.title}>
            <Box x={botX[i]} y={286} width={220} height={132} fill={on ? C.accent : C.bg} stroke={on ? undefined : C.accent} />
            <T x={botX[i] + 110} y={312} anchor="middle" size={14} weight={600} fill={on ? C.onAccent : C.fg}>{b.title}</T>
            <Lines x={botX[i] + 110} y={336} anchor="middle" fill={on ? C.onAccent : C.body} lines={b.lines} />
          </g>
        );
      })}
      <Wire x1={260} y1={352} x2={440} y2={352} />
      <Wire x1={660} y1={352} x2={840} y2={352} />

      <Wire x1={550} y1={286} x2={550} y2={168} arrow stroke={C.fg} dash="6 4" />
      <T x={566} y={186} mono weight={600}>{t.escalation[0]}</T>
      <T x={566} y={216} fill={C.body}>{t.escalation[1]}</T>
    </Canvas>
  );
}
