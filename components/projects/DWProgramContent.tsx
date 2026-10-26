import CaseIntro from "@/components/case/CaseIntro";
import CaseSection from "@/components/case/CaseSection";
import Infochart from "@/components/case/Infochart";
import NumberedGrid from "@/components/case/NumberedGrid";
import PullQuote from "@/components/case/PullQuote";
import StatStrip from "@/components/StatStrip";
import { withAccent } from "@/components/case/accent";
import { Badge, Box, C, Canvas, Lines, T, Wire } from "@/components/case/svg";
import type { Lang } from "@/lib/i18n";
import { copy } from "./DWProgram.copy";

const W = 1100;

export default function DWProgramContent({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <div>
      <CaseIntro lead={t.lead} facts={t.facts} tags={t.tags} />

      <CaseSection num={1} kicker={t.objective.kicker} title={withAccent(t.objective.title)} lead={t.objective.lead}>
        <div className="pt-8">
          <StatStrip stats={t.objective.stats} label={t.objective.kicker} />
        </div>
      </CaseSection>

      <CaseSection num={2} kicker={t.lifecycle.kicker} title={withAccent(t.lifecycle.title)} lead={t.lifecycle.lead}>
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 pt-8 md:grid-cols-3">
          {t.lifecycle.phases.map((p) => (
            <div key={p.num} className="border-t border-line-strong pt-5">
              <p className="lg-mono lg-muted m-0">
                {p.num} · {p.phase} · {p.duration}
              </p>
              <h3 className="title mb-3 mt-3">{p.title}</h3>
              <p className="body-sm mb-3" style={{ color: "var(--body)" }}>{p.body}</p>
              <p className="lg-mono-sm lg-muted m-0">{p.outputs}</p>
            </div>
          ))}
        </div>
        <Infochart lang={lang} num={1} label={t.lifecycle.chart.label} title={t.lifecycle.chart.title} sub={t.lifecycle.chart.sub} minWidth={W}>
          <LifecycleChart t={t.lifecycle.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={3} kicker={t.governance.kicker} title={withAccent(t.governance.title)} lead={t.governance.lead}>
        <Infochart lang={lang} num={2} label={t.governance.chart.label} title={t.governance.chart.title} minWidth={W}>
          <WayOfWorkingChart t={t.governance.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={4} kicker={t.change.kicker} title={withAccent(t.change.title)} lead={t.change.lead}>
        <Infochart lang={lang} num={3} label={t.change.chart.label} title={t.change.chart.title} minWidth={W}>
          <ChangeControlChart t={t.change.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={5} kicker={t.kpis.kicker} title={withAccent(t.kpis.title)} lead={t.kpis.lead}>
        <Infochart lang={lang} num={4} label={t.kpis.chart.label} title={t.kpis.chart.title} minWidth={W}>
          <KpiChart t={t.kpis.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={6} kicker={t.stakeholders.kicker} title={withAccent(t.stakeholders.title)} lead={t.stakeholders.lead}>
        <Infochart lang={lang} num={5} label={t.stakeholders.chart.label} title={t.stakeholders.chart.title} minWidth={W}>
          <TiersChart t={t.stakeholders.chart} />
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

/* Infochart 01: phases (fg), delivery waves (fig-accent-2) and contractual gateways (accent squares). */
function LifecycleChart({ t }: { t: Copy["lifecycle"]["chart"] }) {
  const monthX = [100, 180, 260, 340, 420, 500, 580, 660, 740, 820];
  const gatewayX = [220, 490, 830, 980];
  const phase = (x: number, w: number, [name, note]: string[]) => (
    <g key={name}>
      <Box x={x} y={76} width={w} height={48} fill={C.fg} />
      {/* The long delivery bar is left-aligned so the mid-program gateway line clears its label. */}
      <T x={w > 400 ? x + 20 : x + w / 2} y={96} anchor={w > 400 ? "start" : "middle"} mono weight={600} fill={C.bg}>{name}</T>
      <T x={w > 400 ? x + 20 : x + w / 2} y={114} anchor={w > 400 ? "start" : "middle"} size={12} fill={C.bg}>{note}</T>
    </g>
  );
  return (
    <Canvas h={370} label={t.alt}>
      {t.months.map((m, i) => (
        <T key={m} x={monthX[i]} y={22} anchor="middle" mono fill={C.muted}>{m}</T>
      ))}
      <line x1={60} y1={100} x2={980} y2={100} stroke={C.line} strokeWidth={2} />
      {phase(60, 160, t.phases.initiation)}
      {phase(225, 600, t.phases.delivery)}
      {phase(830, 150, t.phases.closure)}
      <Lines x={140} y={152} anchor="middle" fill={C.body} lines={t.initiationNote} />
      <Lines x={905} y={152} anchor="middle" fill={C.body} lines={t.closureNote} />
      {t.waves.map((w, i) => (
        <g key={w}>
          <Box x={240 + i * 130} y={142} width={120} height={22} fill={C.accent2} />
          <T x={300 + i * 130} y={158} anchor="middle" size={12} weight={600} fill={C.bg}>{w}</T>
        </g>
      ))}
      {t.gateways.map((g, i) => (
        <g key={g.id}>
          <Wire x1={gatewayX[i]} y1={60} x2={gatewayX[i]} y2={220} stroke={C.accent} dash="3 3" />
          <Badge cx={gatewayX[i]} cy={236} size={30} fill={C.accent} label={g.id} labelSize={12} />
          <T x={gatewayX[i]} y={276} anchor="middle" weight={600}>{g.title}</T>
          <Lines x={gatewayX[i]} y={296} anchor="middle" fill={C.body} lines={g.lines} />
        </g>
      ))}
      <Box x={60} y={341} width={14} height={14} fill={C.fg} />
      <T x={82} y={353} fill={C.body}>{t.legend.phase}</T>
      <Box x={160} y={341} width={14} height={14} fill={C.accent2} />
      <T x={182} y={353} fill={C.body}>{t.legend.wave}</T>
      <Box x={310} y={341} width={14} height={14} fill={C.accent} />
      <T x={332} y={353} fill={C.body}>{t.legend.gateway}</T>
    </Canvas>
  );
}

/* Infochart 02: four steps in sequence; the last one (control) is the filled one. */
function WayOfWorkingChart({ t }: { t: Copy["governance"]["chart"] }) {
  const xs = [50, 310, 570, 830];
  return (
    <Canvas h={330} label={t.alt}>
      <T x={20} y={22} mono fill={C.muted}>{t.caption}</T>
      <line x1={20} y1={34} x2={1080} y2={34} stroke={C.line} />
      {t.steps.map((s, i) => {
        const on = i === 3;
        const ink = on ? C.onAccent : C.fg;
        return (
          <g key={s.title}>
            <Box x={xs[i]} y={70} width={210} height={170} fill={on ? C.accent : C.bg} stroke={on ? undefined : C.fg} />
            <T x={xs[i] + 20} y={110} size={36} weight={600} fill={on ? C.onAccent : C.accent}>{String(i + 1).padStart(2, "0")}</T>
            <T x={xs[i] + 20} y={140} size={15} weight={600} fill={ink}>{s.title}</T>
            <Lines x={xs[i] + 20} y={166} fill={on ? C.onAccent : C.body} lines={s.lines} />
            {i < 3 && <Wire x1={xs[i] + 214} y1={155} x2={xs[i + 1] - 6} y2={155} arrow stroke={C.fg} />}
          </g>
        );
      })}
      <T x={50} y={280} mono weight={600}>{t.goalsTitle}</T>
      {t.goals.map((g, i) => (
        <T key={g} x={xs[i]} y={306} fill={C.body}>
          {`${String(i + 1).padStart(2, "0")}. ${g}`}
        </T>
      ))}
    </Canvas>
  );
}

/* Infochart 03: trigger → three CCP steps → three options, with the defensive mechanisms below. */
function ChangeControlChart({ t }: { t: Copy["change"]["chart"] }) {
  const stepX = [280, 560, 840];
  const optX = [265, 550, 835];
  return (
    <Canvas h={490} label={t.alt}>
      <Box x={20} y={40} width={200} height={96} fill={C.bg} stroke={C.accent} sw={2} strokeDasharray="4 3" />
      <T x={120} y={66} anchor="middle" mono weight={600} fill={C.accent}>{t.trigger.tag}</T>
      <T x={120} y={92} anchor="middle" weight={600}>{t.trigger.title}</T>
      <T x={120} y={112} anchor="middle" fill={C.body}>{t.trigger.line}</T>
      <Wire x1={224} y1={88} x2={276} y2={88} arrow stroke={C.fg} />
      {t.steps.map((s, i) => {
        const on = i === 2;
        const fill = on ? C.accent : C.fg;
        const ink = on ? C.onAccent : C.bg;
        return (
          <g key={s.tag}>
            <Box x={stepX[i]} y={40} width={220} height={96} fill={fill} />
            <T x={stepX[i] + 20} y={64} mono fill={ink}>{s.tag}</T>
            <T x={stepX[i] + 20} y={88} size={14} weight={600} fill={ink}>{s.title}</T>
            <Lines x={stepX[i] + 20} y={108} gap={17} fill={ink} lines={s.lines} />
            {i < 2 && <Wire x1={stepX[i] + 224} y1={88} x2={stepX[i + 1] - 4} y2={88} arrow stroke={C.fg} />}
          </g>
        );
      })}
      <Wire x1={950} y1={136} x2={950} y2={168} stroke={C.fg} />
      <Wire x1={380} y1={168} x2={950} y2={168} stroke={C.fg} />
      {optX.map((x) => (
        <Wire key={x} x1={x + 115} y1={168} x2={x + 115} y2={194} arrow stroke={C.fg} />
      ))}
      {t.options.map((o, i) => {
        const on = i === 1;
        const ink = on ? C.bg : C.fg;
        return (
          <g key={o.tag}>
            <Box x={optX[i]} y={196} width={230} height={150} fill={on ? C.fg : C.bg} stroke={on ? undefined : C.fg} />
            <T x={optX[i] + 20} y={220} mono weight={600} fill={on ? C.bg : C.muted}>{o.tag}</T>
            <T x={optX[i] + 20} y={244} size={14} weight={600} fill={ink}>{o.title}</T>
            <Lines x={optX[i] + 20} y={268} fill={on ? C.bg : C.body} lines={o.lines} />
          </g>
        );
      })}
      <T x={20} y={392} mono weight={600}>{t.defenseTitle}</T>
      <line x1={20} y1={402} x2={1080} y2={402} stroke={C.line} />
      {t.defenses.map((d, i) => (
        <g key={d.title}>
          <Box x={20 + i * 270} y={418} width={10} height={10} fill={C.accent} />
          <T x={38 + i * 270} y={428} weight={600}>{d.title}</T>
          <Lines x={20 + i * 270} y={450} fill={C.body} lines={d.lines} />
        </g>
      ))}
    </Canvas>
  );
}

/* Infochart 04: four KPI cards (accent on the targets) and the RAID strip below. */
function KpiChart({ t }: { t: Copy["kpis"]["chart"] }) {
  const xs = [20, 290, 560, 830];
  return (
    <Canvas h={370} label={t.alt}>
      {t.cards.map((c, i) => (
        <g key={c.tag}>
          <Box x={xs[i]} y={20} width={i === 3 ? 250 : 260} height={176} fill={C.bg} stroke={C.line} sw={1} />
          <T x={xs[i] + 20} y={48} mono fill={C.muted}>{c.tag}</T>
          <T x={xs[i] + 20} y={76} size={14} weight={600}>{c.title}</T>
          <T x={xs[i] + 20} y={118} size={36} weight={600} fill={C.accent}>{c.value}</T>
          <T x={xs[i] + 20} y={138} size={12} fill={C.muted}>{c.unit}</T>
          <Lines x={xs[i] + 20} y={162} fill={C.body} lines={c.lines} />
        </g>
      ))}
      <T x={20} y={232} mono weight={600}>{t.raidTitle}</T>
      <line x1={20} y1={242} x2={1080} y2={242} stroke={C.line} />
      {t.raid.map((r, i) => (
        <g key={r.letter}>
          <Box x={xs[i]} y={258} width={i === 3 ? 250 : 260} height={92} fill={C.bg} stroke={C.line} sw={1} />
          <Badge cx={xs[i] + 38} cy={284} size={32} fill={C.fg} label={r.letter} ink={C.bg} labelSize={16} />
          <T x={xs[i] + 66} y={290} size={14} weight={600}>{r.title}</T>
          <Lines x={xs[i] + 20} y={318} fill={C.body} lines={r.lines} />
        </g>
      ))}
    </Canvas>
  );
}

/* Infochart 05: three tiers, told apart by lightness (accent, fg, outlined), with escalation flowing up. */
function TiersChart({ t }: { t: Copy["stakeholders"]["chart"] }) {
  const style = [
    { fill: C.accent, stroke: undefined, ink: C.onAccent, sub: C.onAccent },
    { fill: C.fg, stroke: undefined, ink: C.bg, sub: C.bg },
    { fill: C.bg, stroke: C.fg, ink: C.fg, sub: C.body },
  ];
  return (
    <Canvas h={490} label={t.alt}>
      {t.tiers.map((tier, i) => {
        const y = 20 + i * 130;
        const s = style[i];
        return (
          <g key={tier.tag}>
            <Box x={20} y={y} width={1000} height={112} fill={s.fill} stroke={s.stroke} />
            <T x={40} y={y + 28} mono weight={600} fill={s.ink}>{tier.tag}</T>
            <T x={40} y={y + 56} size={16} weight={600} fill={s.ink}>{tier.who}</T>
            <T x={40} y={y + 80} fill={s.sub}>{tier.receives}</T>
            <T x={650} y={y + 28} mono weight={600} fill={s.ink}>{t.cadence}</T>
            <T x={650} y={y + 56} weight={600} fill={s.ink}>{tier.cadence}</T>
            <Lines x={650} y={y + 78} fill={s.sub} lines={tier.lines} />
          </g>
        );
      })}
      <Wire x1={1054} y1={392} x2={1054} y2={28} arrow stroke={C.fg} dash="6 4" />
      <T x={1054} y={410} anchor="middle" mono size={12} fill={C.muted}>{t.escalation}</T>
      <Lines x={20} y={438} fill={C.body} lines={t.note} />
    </Canvas>
  );
}
