import CaseIntro from "@/components/case/CaseIntro";
import CaseSection from "@/components/case/CaseSection";
import Infochart from "@/components/case/Infochart";
import NumberedGrid from "@/components/case/NumberedGrid";
import PullQuote from "@/components/case/PullQuote";
import { withAccent } from "@/components/case/accent";
import { pad2 } from "@/components/figures/Figure";
import { Badge, Box, C, Canvas, Lines, T, Wire } from "@/components/case/svg";
import type { Lang } from "@/lib/i18n";
import { copy } from "./DataIntelligencePlatform.copy";

const W = 1100;

export default function DataIntelligencePlatformContent({ lang }: { lang: Lang }) {
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
            <h3 className="title mb-3">{t.context.challenge.title}</h3>
            <p className="body mb-4" style={{ color: "var(--body)" }}>
              <strong style={{ color: "var(--fg)" }}>{t.context.challenge.strong}</strong>
              {t.context.challenge.p1}
            </p>
            <p className="body" style={{ color: "var(--body)" }}>{t.context.challenge.p2}</p>
          </div>
        </div>
      </CaseSection>

      <CaseSection num={2} kicker={t.lifecycle.kicker} title={withAccent(t.lifecycle.title)} lead={t.lifecycle.lead}>
        <Infochart lang={lang} num={1} label={t.lifecycle.chart.label} title={t.lifecycle.chart.title} minWidth={W}>
          <TimelineChart t={t.lifecycle.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={3} kicker={t.goals.kicker} title={withAccent(t.goals.title)} lead={t.goals.lead}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.goals.items.map((g) => (
            <div key={g.q} className="border-t border-line-strong pt-5">
              <p className="lg-mono-sm lg-muted m-0">{g.q}</p>
              <h3 className="title mb-3 mt-3">{g.title}</h3>
              <p className="body-sm mb-4" style={{ color: "var(--body)" }}>{g.desc}</p>
              <p className="lg-mono-sm m-0 border-t border-line pt-3">{g.milestone}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection num={4} kicker={t.backlog.kicker} title={withAccent(t.backlog.title)} lead={t.backlog.lead}>
        <Infochart lang={lang} num={2} label={t.backlog.chart.label} title={t.backlog.chart.title} sub={t.backlog.chart.sub} minWidth={W}>
          <BacklogChart t={t.backlog.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={5} kicker={t.q1.kicker} title={withAccent(t.q1.title)} lead={t.q1.lead}>
        <div className="pt-8">
          <NumberedGrid items={t.q1.items} />
        </div>
      </CaseSection>

      <CaseSection num={6} kicker={t.allocation.kicker} title={withAccent(t.allocation.title)} lead={t.allocation.lead}>
        <Infochart lang={lang} num={3} label={t.allocation.chart.label} title={t.allocation.chart.title} minWidth={W}>
          <AllocationChart t={t.allocation.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={7} kicker={t.calendar.kicker} title={withAccent(t.calendar.title)} lead={t.calendar.lead}>
        <Infochart lang={lang} num={4} label={t.calendar.chart.label} title={t.calendar.chart.title} minWidth={W}>
          <CalendarChart t={t.calendar.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={8} kicker={t.kanban.kicker} title={withAccent(t.kanban.title)} lead={t.kanban.lead}>
        <Infochart lang={lang} num={5} label={t.kanban.chart.label} title={t.kanban.chart.title} minWidth={W}>
          <KanbanChart t={t.kanban.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={9} kicker={t.foundation.kicker} title={withAccent(t.foundation.title)} lead={t.foundation.lead}>
        <div className="flex flex-col gap-10 pt-8">
          {t.foundation.items.map((it, i) => (
            <div key={it.title} className="border-t border-line-strong pt-5">
              <p className="lg-mono-sm lg-muted m-0">
                {t.foundation.tag} · {pad2(i + 1)}
              </p>
              <h3 className="title mb-3 mt-3">{it.title}</h3>
              <p className="body m-0" style={{ color: "var(--body)" }}>{it.body}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      <PullQuote>{withAccent(t.quote)}</PullQuote>
    </div>
  );
}

type Copy = (typeof copy)["en"];

/* Infochart 01: a spine with square start/close markers and four numbered phase squares. */
function TimelineChart({ t }: { t: Copy["lifecycle"]["chart"] }) {
  const cx = [170, 410, 650, 890];
  const rule = [C.fg, C.accent, C.accent2, C.tile];
  return (
    <Canvas h={370} label={t.alt}>
      {t.quarters.map((q, i) => (
        <T key={q} x={cx[i]} y={22} anchor="middle" mono fill={C.muted}>{q}</T>
      ))}
      <line x1={40} y1={34} x2={1060} y2={34} stroke={C.line} />
      <T x={40} y={78} anchor="middle" mono weight={600} fill={C.accent}>{t.start}</T>
      <T x={1040} y={78} anchor="middle" mono weight={600} fill={C.accent}>{t.close}</T>
      <line x1={40} y1={100} x2={1040} y2={100} stroke={C.accent} strokeWidth={2} />
      <Badge cx={40} cy={100} size={18} fill={C.fg} />
      <Badge cx={1040} cy={100} size={18} fill={C.fg} />
      {t.phases.map((p, i) => (
        <g key={p.title}>
          <Badge cx={cx[i]} cy={100} size={30} fill={C.bg} stroke={C.accent} label={pad2(i + 1)} ink={C.accent} labelSize={12} />
          <Wire x1={cx[i]} y1={116} x2={cx[i]} y2={150} />
          <Box x={cx[i] - 110} y={155} width={220} height={176} fill={C.bg} stroke={C.fg} />
          <T x={cx[i]} y={182} anchor="middle" size={14} weight={600}>{p.title}</T>
          <Lines x={cx[i] - 96} y={210} fill={C.body} lines={p.items} />
          <Box x={cx[i] - 110} y={340} width={220} height={4} fill={rule[i]} />
        </g>
      ))}
    </Canvas>
  );
}

/* Infochart 02: deliverable (filled fg) → activities (accent) → tasks (outlined). */
function BacklogChart({ t }: { t: Copy["backlog"]["chart"] }) {
  const act = [410, 890];
  const tasks = [320, 500, 800, 980];
  return (
    <Canvas h={410} label={t.alt}>
      <Box x={20} y={40} width={210} height={104} fill={C.bg} stroke={C.line} sw={1} />
      <T x={36} y={66} mono weight={600} fill={C.accent}>{t.projectBacklog.tag}</T>
      <Lines x={36} y={90} fill={C.body} lines={t.projectBacklog.lines} />
      <Box x={20} y={252} width={210} height={104} fill={C.bg} stroke={C.accent2} sw={1} />
      <T x={36} y={278} mono weight={600}>{t.sprintBacklog.tag}</T>
      <Lines x={36} y={302} fill={C.body} lines={t.sprintBacklog.lines} />

      <line x1={250} y1={222} x2={1080} y2={222} stroke={C.wire} strokeDasharray="4 4" />

      <Box x={530} y={38} width={240} height={64} fill={C.fg} />
      <T x={650} y={66} anchor="middle" size={15} weight={600} fill={C.bg}>{t.deliverable[0]}</T>
      <T x={650} y={86} anchor="middle" size={12} fill={C.bg}>{t.deliverable[1]}</T>
      {act.map((x) => (
        <Wire key={x} x1={650} y1={102} x2={x} y2={142} />
      ))}
      {act.map((x, i) => (
        <g key={x}>
          <Box x={x - 105} y={142} width={210} height={56} fill={C.accent} />
          <T x={x} y={166} anchor="middle" size={14} weight={600} fill={C.onAccent}>{`${t.activity[0]} ${i + 1}`}</T>
          <T x={x} y={186} anchor="middle" size={12} fill={C.onAccent}>{t.activity[1]}</T>
        </g>
      ))}
      {tasks.map((x, i) => (
        <g key={x}>
          <Wire x1={act[Math.floor(i / 2)]} y1={198} x2={x} y2={244} />
          <Box x={x - 65} y={244} width={130} height={44} fill={C.bg} stroke={C.fg} />
          <T x={x} y={271} anchor="middle" weight={600}>{`${t.task} ${i + 1}`}</T>
        </g>
      ))}

      <T x={250} y={322} mono weight={600}>{t.definitionsTitle}</T>
      {t.definitions.map(([term, def], i) => (
        <T key={term} x={250} y={346 + i * 20} fill={C.body}>
          <tspan fontWeight={600} fill={i < 2 ? C.accent : C.fg}>{term}</tspan>
          {def}
        </T>
      ))}
    </Canvas>
  );
}

/* Infochart 03: hours per role. Bars: data engineer fig-accent-2, data scientist fg, PM accent. */
function AllocationChart({ t }: { t: Copy["allocation"]["chart"] }) {
  const rows = [
    { de: 5, ds: 20, pm: 0 },
    { de: 5, ds: 20, pm: 0 },
    { de: 10, ds: 0, pm: 0 },
    { de: 0, ds: 0, pm: 10 },
  ];
  const head = [70, 730, 870, 1010];
  const dash = (x: number, y: number) => <T x={x} y={y} anchor="middle" size={14} fill={C.muted}>—</T>;
  return (
    <Canvas h={470} label={t.alt}>
      {t.head.map((h, i) => (
        <T key={h} x={head[i]} y={22} anchor={i === 0 ? "start" : "middle"} mono weight={600}>{h}</T>
      ))}
      <line x1={20} y1={34} x2={1080} y2={34} stroke={C.fg} />
      {t.rows.map((r, i) => {
        const c = 74 + i * 61;
        const v = rows[i];
        return (
          <g key={r.title}>
            <Badge cx={40} cy={c} size={28} fill={C.fg} label={pad2(i + 1)} ink={C.bg} labelSize={12} />
            <T x={70} y={c - 4} weight={600}>{r.title}</T>
            <T x={70} y={c + 14} fill={C.body}>{r.sub}</T>
            {v.de ? (
              <>
                <Box x={660} y={c - 14} width={v.de * 7} height={28} fill={C.accent2} />
                <T x={668 + v.de * 7} y={c + 5} size={14} weight={600}>{String(v.de)}</T>
              </>
            ) : dash(730, c + 5)}
            {v.ds ? (
              <>
                <Box x={800} y={c - 14} width={v.ds * 7} height={28} fill={C.fg} />
                <T x={808 + v.ds * 7} y={c + 5} size={14} weight={600}>{String(v.ds)}</T>
              </>
            ) : dash(870, c + 5)}
            {v.pm ? (
              <>
                <Box x={975} y={c - 14} width={v.pm * 7} height={28} fill={C.accent} />
                <T x={1010} y={c + 5} anchor="middle" size={14} weight={600} fill={C.onAccent}>{String(v.pm)}</T>
              </>
            ) : dash(1010, c + 5)}
            <line x1={20} y1={c + 31} x2={1080} y2={c + 31} stroke={i === 3 ? C.fg : C.line} />
          </g>
        );
      })}
      <T x={70} y={326} size={14} weight={600}>{t.totals.title}</T>
      <T x={70} y={346} fill={C.body}>{t.totals.sub}</T>
      {[["20", 730], ["40", 870], ["10", 1010]].map(([n, x]) => (
        <T key={x} x={+x} y={336} anchor="middle" size={24} weight={600} fill={C.accent}>
          {n}
          <tspan fontSize={14} fill={C.body}>{t.totals.unit}</tspan>
        </T>
      ))}
      <Box x={20} y={372} width={1060} height={80} fill={C.surface} stroke={C.line} sw={1} />
      <T x={40} y={396} weight={600} fill={C.accent}>{t.note[0]}</T>
      <Lines x={40} y={418} fill={C.body} lines={t.note.slice(1)} />
    </Canvas>
  );
}

/* Infochart 04: two weeks × three roles × five days. Cell outlines tell activity types apart. */
function CalendarChart({ t }: { t: Copy["calendar"]["chart"] }) {
  const weekX = [80, 565];
  const kinds = [
    { stroke: C.tile, sw: 1, dash: undefined },
    { stroke: C.accent2, sw: 1.5, dash: undefined },
    { stroke: C.fg, sw: 1, dash: undefined },
    { stroke: C.accent, sw: 2, dash: undefined },
    { stroke: C.wire, sw: 1.5, dash: "3 2" },
  ];
  const cell = (x: number, y: number, text: string, k: number, w = 160) => (
    <g key={`${x}-${y}`}>
      <Box x={x} y={y} width={w} height={36} fill={C.bg} stroke={kinds[k].stroke} sw={kinds[k].sw} strokeDasharray={kinds[k].dash} />
      <T x={x + w / 2} y={y + 23} anchor="middle" weight={k === 3 ? 600 : undefined} fill={k === 3 ? C.accent : C.body}>{text}</T>
    </g>
  );
  return (
    <Canvas h={470} label={t.alt}>
      {t.weeks.map((w, i) => (
        <g key={w}>
          <Box x={weekX[i]} y={0} width={480} height={32} fill={C.fg} />
          <T x={weekX[i] + 240} y={21} anchor="middle" mono weight={600} fill={C.bg}>{w}</T>
          {t.roles.map((r, j) => (
            <T key={r} x={weekX[i] + 80 + j * 160} y={54} anchor="middle" mono weight={600} fill={C.accent}>{r}</T>
          ))}
        </g>
      ))}
      {[t.w1, t.w2].map((week, wi) =>
        week.map((day, d) => day.map((text, r) => cell(weekX[wi] + r * 160, 70 + d * 45, text, r === 0 ? 0 : r === 1 ? 1 : 2))),
      )}
      {t.days.slice(0, 3).map((d, i) => (
        <T key={d} x={20} y={93 + i * 45} mono weight={600}>{d}</T>
      ))}
      <T x={20} y={228} mono weight={600} fill={C.accent}>{t.days[3]}</T>
      {weekX.map((x, wi) => [0, 1, 2].map((r) => cell(x + r * 160, 205, t.thu[wi], 3)))}
      {weekX.map((x) => cell(x, 250, t.sync, 4, 480))}
      <T x={20} y={313} mono weight={600}>{t.days[4]}</T>
      {weekX.map((x) => cell(x, 295, t.fri, 2, 480))}

      <T x={20} y={366} mono weight={600}>{t.legendTitle}</T>
      {t.legend.map((l, i) => (
        <g key={l}>
          <Box x={110 + i * 180} y={355} width={18} height={14} fill={C.bg} stroke={kinds[i].stroke} sw={kinds[i].sw} strokeDasharray={kinds[i].dash} />
          <T x={136 + i * 180} y={367} fill={C.body}>{l}</T>
        </g>
      ))}
      <T x={20} y={420} fill={C.body}>{t.note}</T>
    </Canvas>
  );
}

/* Infochart 05: roadmap zone → sprint execution zone; review (QC) is the accent column. */
function KanbanChart({ t }: { t: Copy["kanban"]["chart"] }) {
  const header = (x: number, w: number, label: string, on = false) => (
    <g key={label}>
      <Box x={x} y={60} width={w} height={30} fill={on ? C.accent : C.fg} />
      <T x={x + w / 2} y={80} anchor="middle" weight={600} fill={on ? C.onAccent : C.bg}>{label}</T>
    </g>
  );
  /* A "\n" in the subtitle breaks it onto a second line inside a taller card. */
  const card = (x: number, y: number, w: number, [title, sub]: string[], stroke: string, strike = false) => {
    const subs = sub.split("\n");
    return (
      <g key={`${x}-${y}`}>
        <Box x={x} y={y} width={w} height={44 + (subs.length - 1) * 16} fill={C.bg} stroke={stroke} />
        <T x={x + 10} y={y + 19} size={12} fill={C.fg}>
          <tspan textDecoration={strike ? "line-through" : undefined}>{title}</tspan>
        </T>
        <Lines x={x + 10} y={y + 36} gap={16} size={12} fill={C.muted} lines={subs} />
      </g>
    );
  };
  const exX = [405, 570, 735, 900];
  return (
    <Canvas h={400} label={t.alt}>
      <Box x={20} y={20} width={350} height={286} fill={C.bg} stroke={C.fg} />
      <T x={35} y={44} mono weight={600} fill={C.accent}>{t.zones[0]}</T>
      {header(35, 155, t.columns[0])}
      {t.projectBacklog.map((l, i) => (
        <g key={l}>
          <Box x={35} y={100 + i * 34} width={155} height={28} fill={C.bg} stroke={i < 3 ? C.fg : C.line} />
          <T x={45} y={119 + i * 34} size={12} weight={i < 3 ? 600 : undefined} fill={i < 3 ? C.fg : C.muted}>{l}</T>
        </g>
      ))}
      {header(200, 155, t.columns[1])}
      {t.sprintBacklog.map((l, i) => (
        <g key={l}>
          <Box x={200} y={100 + i * 34} width={155} height={28} fill={C.bg} stroke={C.accent2} />
          <T x={210} y={119 + i * 34} size={12} fill={C.body}>{l}</T>
        </g>
      ))}

      <Wire x1={374} y1={200} x2={388} y2={200} arrow stroke={C.fg} />

      <Box x={390} y={20} width={690} height={286} fill={C.bg} stroke={C.line} sw={1} />
      <T x={405} y={44} mono weight={600} fill={C.accent}>{t.zones[1]}</T>
      {header(exX[0], 155, t.columns[2])}
      {t.todo.map((c, i) => card(exX[0], 100 + i * 54, 155, c, C.line))}
      {header(exX[1], 155, t.columns[3])}
      {t.doing.map((c, i) => card(exX[1], 100 + i * 54, 155, c, C.fg))}
      {header(exX[2], 155, t.columns[4], true)}
      {t.review.map((c, i) => card(exX[2], 100 + i * 54, 155, c, C.accent))}
      {header(exX[3], 165, t.columns[5])}
      {t.done.map((c, i) => card(exX[3], 100 + i * 54, 165, c, C.tile, true))}

      <Box x={20} y={324} width={1060} height={58} fill={C.bg} stroke={C.line} sw={1} />
      <T x={35} y={347} weight={600} fill={C.accent}>{t.note[0]}</T>
      <T x={35} y={367} fill={C.body}>{t.note[1]}</T>
    </Canvas>
  );
}
