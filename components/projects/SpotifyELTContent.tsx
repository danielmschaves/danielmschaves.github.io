import CaseIntro from "@/components/case/CaseIntro";
import CaseSection from "@/components/case/CaseSection";
import Infochart from "@/components/case/Infochart";
import NumberedGrid from "@/components/case/NumberedGrid";
import PullQuote from "@/components/case/PullQuote";
import StatStrip from "@/components/StatStrip";
import { withAccent } from "@/components/case/accent";
import { Box, C, Canvas, Lines, T, Wire } from "@/components/case/svg";
import { copy } from "./SpotifyELT.copy";

const W = 1100;

export default function SpotifyELTContent({ lang = "en" }: { lang?: "en" }) {
  const t = copy[lang];
  const [leadBefore, leadCode, leadAfter] = t.deliverables.lead;

  return (
    <div>
      <CaseIntro lead={t.lead} facts={t.facts} tags={t.tags} links={t.links} />

      <CaseSection num={1} kicker={t.context.kicker} title={withAccent(t.context.title)}>
        <div className="grid grid-cols-1 gap-12 pt-6 md:grid-cols-2">
          <div>
            <h3 className="title mb-3">{t.context.premise.title}</h3>
            <p className="body mb-4" style={{ color: "var(--body)" }}>{t.context.premise.p1}</p>
            <p className="body" style={{ color: "var(--body)" }}>{t.context.premise.p2}</p>
          </div>
          <div>
            <h3 className="title mb-3">{t.context.job.title}</h3>
            <p className="body mb-4" style={{ color: "var(--body)" }}>
              <strong style={{ color: "var(--fg)" }}>{t.context.job.strong}</strong>
              {t.context.job.p1}
            </p>
            <p className="body" style={{ color: "var(--body)" }}>{t.context.job.p2}</p>
          </div>
        </div>
        <Infochart num={1} label={t.context.chart.label} title={t.context.chart.title} sub={t.context.chart.sub} minWidth={W}>
          <MedallionChart t={t.context.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={2} kicker={t.topology.kicker} title={withAccent(t.topology.title)} lead={t.topology.lead}>
        <Infochart num={2} label={t.topology.chart.label} title={t.topology.chart.title} sub={t.topology.chart.sub} minWidth={W}>
          <TopologyChart t={t.topology.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={3} kicker={t.orchestration.kicker} title={withAccent(t.orchestration.title)} lead={t.orchestration.lead}>
        <Infochart num={3} label={t.orchestration.chart.label} title={t.orchestration.chart.title} sub={t.orchestration.chart.sub} minWidth={W}>
          <DagChart t={t.orchestration.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={4} kicker={t.transformation.kicker} title={withAccent(t.transformation.title)} lead={t.transformation.lead}>
        <Infochart num={4} label={t.transformation.chart.label} title={t.transformation.chart.title} minWidth={W}>
          <DbtChart t={t.transformation.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection num={5} kicker={t.cost.kicker} title={withAccent(t.cost.title)} lead={t.cost.lead}>
        <div className="pt-8">
          <StatStrip stats={t.cost.stats} label={t.cost.kicker} />
        </div>
        <Infochart num={5} label={t.cost.chart.label} title={t.cost.chart.title} sub={t.cost.chart.sub} minWidth={W}>
          <CostChart t={t.cost.chart} />
        </Infochart>
      </CaseSection>

      <CaseSection
        num={6}
        kicker={t.deliverables.kicker}
        title={withAccent(t.deliverables.title)}
        lead={
          <>
            {leadBefore}
            <code className="lg-mono-sm">{leadCode}</code>
            {leadAfter}
          </>
        }
      >
        <div className="pt-8">
          <NumberedGrid items={t.deliverables.items} />
        </div>
      </CaseSection>

      <PullQuote>{withAccent(t.quote)}</PullQuote>
    </div>
  );
}

type Copy = (typeof copy)["en"];

/* Infochart 01: Raw, Bronze and Silver outlined, Gold filled; the Power BI hand-off is the one accent. */
function MedallionChart({ t }: { t: Copy["context"]["chart"] }) {
  const w = 236;
  const gap = 39;
  return (
    <Canvas h={350} label={t.alt}>
      <T x={20} y={24} mono fill={C.muted}>{t.header}</T>
      <line x1={20} y1={36} x2={1080} y2={36} stroke={C.line} />
      {t.stages.map((s, i) => {
        const x = 20 + i * (w + gap);
        const cx = x + w / 2;
        const gold = i === t.stages.length - 1;
        const ink = gold ? C.bg : C.fg;
        const label = gold ? C.bg : C.muted;
        const field = (name: string, value: string, y: number) => (
          <>
            <T x={cx} y={y} anchor="middle" mono fill={label}>{name}</T>
            <T x={cx} y={y + 18} anchor="middle" weight={600} fill={ink}>{value}</T>
          </>
        );
        return (
          <g key={s.name}>
            <Box x={x} y={56} width={w} height={232} fill={gold ? C.fg : "none"} stroke={gold ? undefined : C.lineStrong} />
            <T x={cx} y={92} anchor="middle" size={28} weight={600} fill={ink}>{s.name}</T>
            <line x1={x + 20} y1={106} x2={x + w - 20} y2={106} stroke={gold ? C.bg : C.line} />
            {field(t.fields.format, s.format, 128)}
            {field(t.fields.tool, s.tool, 172)}
            {field(t.fields.storage, s.storage, 216)}
            <Lines x={cx} y={256} anchor="middle" fill={gold ? C.bg : C.body} lines={s.notes} />
            {!gold && <Wire x1={x + w + 6} y1={172} x2={x + w + gap - 6} y2={172} arrow />}
          </g>
        );
      })}
      <Wire x1={20 + 3 * (w + gap) + w / 2} y1={288} x2={20 + 3 * (w + gap) + w / 2} y2={310} />
      <Box x={20 + 3 * (w + gap) + w / 2 - 80} y={310} width={160} height={30} fill={C.accent} />
      <T x={20 + 3 * (w + gap) + w / 2} y={330} anchor="middle" mono weight={600} fill={C.onAccent}>{t.callout}</T>
    </Canvas>
  );
}

/* Infochart 02: tools filled fg, storage zones outlined, Terraform dashed; Power BI is the one accent. */
function TopologyChart({ t }: { t: Copy["topology"]["chart"] }) {
  const zoneY = [118, 184, 250];
  const taskY = [124, 156, 188, 220];
  const tool = (x: number, y: number, w: number, h: number, name: string, tags: string[], items: string[], fill: string, ink: string) => {
    const cx = x + w / 2;
    return (
      <>
        <Box x={x} y={y} width={w} height={h} fill={fill} />
        <T x={cx} y={y + 26} anchor="middle" size={14} weight={600} fill={ink}>{name}</T>
        <Lines x={cx} y={y + 46} anchor="middle" mono gap={16} fill={ink} lines={tags} />
        <line x1={x + 14} y1={y + 46 + tags.length * 16 - 6} x2={x + w - 14} y2={y + 46 + tags.length * 16 - 6} stroke={ink} strokeOpacity={0.4} />
        <Lines x={cx} y={y + 46 + tags.length * 16 + 16} anchor="middle" fill={ink} lines={items} />
      </>
    );
  };
  return (
    <Canvas h={440} label={t.alt}>
      {[
        [65, t.layers.source],
        [240, t.layers.orchestration],
        [422, t.layers.storage],
        [578, t.layers.processing],
        [770, t.layers.warehouse],
        [987, t.layers.analytics],
      ].map(([x, l]) => (
        <T key={l as string} x={x as number} y={22} anchor="middle" mono weight={600} fill={C.muted}>{l as string}</T>
      ))}
      {[132, 348, 668, 872].map((x) => (
        <line key={x} x1={x} y1={34} x2={x} y2={424} stroke={C.line} />
      ))}

      {/* Spotify API */}
      <Box x={10} y={60} width={112} height={124} fill={C.fg} />
      <Lines x={66} y={84} anchor="middle" size={14} weight={600} fill={C.bg} lines={t.spotify.name} />
      <Lines x={66} y={128} anchor="middle" gap={16} fill={C.bg} lines={t.spotify.items} />
      <Wire x1={122} y1={120} x2={143} y2={120} arrow />

      {/* Airflow and its four task groups */}
      <Box x={145} y={42} width={190} height={274} stroke={C.lineStrong} />
      <Lines x={240} y={66} anchor="middle" size={14} weight={600} lines={t.airflow.name} />
      <T x={240} y={104} anchor="middle" mono fill={C.muted}>{t.airflow.schedule}</T>
      <line x1={160} y1={114} x2={320} y2={114} stroke={C.line} />
      {t.airflow.tasks.map((task, i) => (
        <g key={task}>
          <Box x={160} y={taskY[i]} width={160} height={24} fill={C.tile} />
          <T x={240} y={taskY[i] + 17} anchor="middle" mono fill={C.fg}>{task}</T>
        </g>
      ))}
      <Lines x={240} y={270} anchor="middle" size={12} fill={C.body} lines={t.airflow.notes} />

      {/* Task groups → S3 zones */}
      {zoneY.map((y, i) => (
        <Wire key={y} x1={320} y1={taskY[i] + 12} x2={360} y2={y + 21} arrow />
      ))}
      {/* dbt_run → Motherduck, under the storage and processing columns */}
      <polyline points="320,232 340,232 340,400 680,400 680,268" fill="none" stroke={C.wire} strokeWidth={1.5} strokeDasharray="5 4" />
      <Wire x1={680} y1={268} x2={692} y2={268} arrow />
      <T x={360} y={418} mono fill={C.muted}>{t.dbtPath}</T>

      {/* S3 zones */}
      {t.zones.map((z, i) => (
        <g key={z.name}>
          <Box x={362} y={zoneY[i]} width={120} height={42} stroke={C.lineStrong} />
          <T x={422} y={zoneY[i] + 18} anchor="middle" mono weight={600}>{z.name}</T>
          <T x={422} y={zoneY[i] + 34} anchor="middle" size={12} fill={C.body}>{z.note}</T>
        </g>
      ))}
      {zoneY.map((y, i) => (
        <Wire key={y} x1={482} y1={y + 21} x2={498} y2={[180, 222, 262][i]} arrow />
      ))}

      {/* DuckDB */}
      {tool(500, 140, 156, 170, t.duckdb.name, t.duckdb.tags, t.duckdb.items, C.fg, C.bg)}
      <T x={578} y={296} anchor="middle" weight={600} fill={C.bg}>{t.duckdb.note}</T>
      <Wire x1={656} y1={222} x2={690} y2={222} arrow />

      {/* Motherduck and Terraform */}
      {tool(692, 160, 170, 130, t.motherduck.name, t.motherduck.tags, t.motherduck.items, C.fg, C.bg)}
      <Box x={692} y={312} width={170} height={66} stroke={C.wire} sw={1.5} strokeDasharray="4 3" />
      <T x={777} y={334} anchor="middle" mono weight={600}>{t.terraform.name}</T>
      <Lines x={777} y={352} anchor="middle" size={12} gap={16} fill={C.body} lines={t.terraform.items} />
      <Wire x1={777} y1={312} x2={777} y2={292} arrow dash="4 3" />
      <polyline points="692,345 422,345 422,300" fill="none" stroke={C.wire} strokeWidth={1.5} strokeDasharray="4 3" />
      <Wire x1={422} y1={300} x2={422} y2={294} arrow />

      {/* Power BI */}
      <Wire x1={862} y1={225} x2={882} y2={225} arrow />
      {tool(884, 160, 206, 130, t.powerbi.name, t.powerbi.tags, t.powerbi.items, C.accent, C.onAccent)}
    </Canvas>
  );
}

/* Infochart 03: four task groups in sequence; the gold-stage group is set in fig-accent-2. */
function DagChart({ t }: { t: Copy["orchestration"]["chart"] }) {
  const groups = [
    { x: 20, w: 240 },
    { x: 292, w: 204 },
    { x: 528, w: 204 },
    { x: 764, w: 316 },
  ];
  return (
    <Canvas h={370} label={t.alt}>
      <Box x={20} y={18} width={1060} height={32} fill={C.fg} />
      <T x={36} y={39} mono weight={600} fill={C.bg}>{t.dag}</T>
      <T x={240} y={39} size={12} fill={C.bg}>{t.schedule}</T>
      <T x={1064} y={39} anchor="end" size={12} fill={C.bg}>{t.platform}</T>

      {t.groups.map((g, i) => {
        const { x, w } = groups[i];
        const cx = x + w / 2;
        const gold = i === t.groups.length - 1;
        const fill = gold ? C.accent2 : C.fg;
        return (
          <g key={g.name}>
            <Box x={x} y={66} width={w} height={196} fill={fill} />
            <T x={cx} y={92} anchor="middle" size={14} weight={600} fill={C.bg}>{g.name}</T>
            <T x={cx} y={112} anchor="middle" mono fill={C.bg}>{g.tag}</T>
            <line x1={x + 18} y1={124} x2={x + w - 18} y2={124} stroke={C.bg} strokeOpacity={0.4} />
            <Lines x={cx} y={146} anchor="middle" mono gap={20} fill={C.bg} lines={g.steps} />
            <T x={cx} y={246} anchor="middle" size={12} fill={C.bg}>{g.note}</T>
            {i < t.groups.length - 1 && <Wire x1={x + w + 4} y1={164} x2={groups[i + 1].x - 4} y2={164} arrow />}
          </g>
        );
      })}

      <line x1={20} y1={284} x2={1080} y2={284} stroke={C.lineStrong} />
      <T x={20} y={308} mono weight={600} fill={C.muted}>{t.retry.title}</T>
      {t.retry.lines.map((l, i) => (
        <g key={l}>
          <Box x={20} y={324 + i * 22} width={6} height={6} fill={C.fg} />
          <T x={36} y={331 + i * 22} fill={C.body}>{l}</T>
        </g>
      ))}
    </Canvas>
  );
}

/* Infochart 04: one row per dbt layer; coverage bars filled fg, the marts row in fig-accent-2. */
function DbtChart({ t }: { t: Copy["transformation"]["chart"] }) {
  const bar = { x: 600, w: 340 };
  return (
    <Canvas h={512} label={t.alt}>
      <T x={20} y={22} mono fill={C.muted}>{t.header}</T>
      <line x1={20} y1={32} x2={1080} y2={32} stroke={C.line} />
      <T x={100} y={54} anchor="middle" mono weight={600} fill={C.muted}>{t.columns.layer}</T>
      <T x={200} y={54} mono weight={600} fill={C.muted}>{t.columns.models}</T>
      <T x={bar.x} y={54} mono weight={600} fill={C.muted}>{t.columns.coverage}</T>
      <T x={952} y={54} mono weight={600} fill={C.muted}>{t.columns.tests}</T>
      <line x1={20} y1={64} x2={1080} y2={64} stroke={C.fg} />

      {t.layers.map((l, r) => {
        const y0 = 76 + r * 106;
        const marts = r === t.layers.length - 1;
        const fill = marts ? C.accent2 : C.fg;
        let my = y0 + 16;
        return (
          <g key={l.name}>
            <Box x={20} y={y0} width={160} height={84} fill={fill} />
            <T x={100} y={y0 + 34} anchor="middle" size={16} weight={600} fill={C.bg}>{l.name}</T>
            <Lines x={100} y={y0 + 56} anchor="middle" size={12} gap={16} fill={C.bg} lines={l.sub} />
            {l.models.map((m) => {
              const y = my;
              my += "note" in m ? 38 : 19;
              return (
                <g key={m.code}>
                  <T x={200} y={y} mono weight={600}>{m.code}</T>
                  {"note" in m && <T x={200} y={y + 18} fill={C.body}>{m.note}</T>}
                </g>
              );
            })}
            {l.tests.map((tt, i) => {
              const y = y0 + 2 + i * 30;
              return (
                <g key={tt.label}>
                  <Box x={bar.x} y={y} width={bar.w} height={22} stroke={C.line} sw={1} />
                  <Box x={bar.x} y={y} width={bar.w * tt.share} height={22} fill={fill} />
                  <T x={bar.x + 10} y={y + 16} size={12} weight={600} fill={C.bg}>{tt.label}</T>
                  <T x={952} y={y + 16} fill={C.body}>{tt.count}</T>
                </g>
              );
            })}
            {!marts && <line x1={20} y1={y0 + 96} x2={1080} y2={y0 + 96} stroke={C.line} />}
          </g>
        );
      })}

      <Box x={bar.x} y={76 + 3 * 106 + 36} width={480} height={68} stroke={C.accent2} strokeDasharray="4 3" />
      <T x={bar.x + 16} y={76 + 3 * 106 + 58} weight={600}>{t.targets.title}</T>
      <Lines x={bar.x + 16} y={76 + 3 * 106 + 76} size={12} gap={16} fill={C.body} lines={t.targets.lines} />
    </Canvas>
  );
}

/* Infochart 05: traditional stack in fg, this architecture in accent, the one surface callout on the right. */
function CostChart({ t }: { t: Copy["cost"]["chart"] }) {
  const rowY = [98, 128, 158, 188];
  const side = (s: Copy["cost"]["chart"]["traditional"], cx: number, labelX: number, fill: string) => (
    <>
      <T x={cx} y={62} anchor="middle" size={14} weight={600}>{s.title}</T>
      <T x={cx} y={82} anchor="middle" mono fill={C.muted}>{s.tag}</T>
      {s.rows.map((r, i) => (
        <g key={r.name}>
          <T x={labelX - 10} y={rowY[i] + 15} anchor="end" fill={C.body}>{r.name}</T>
          {r.w > 0 && <Box x={labelX} y={rowY[i]} width={r.w} height={20} fill={fill} />}
          <T x={labelX + r.w + (r.w > 0 ? 8 : 0)} y={rowY[i] + 15} weight={600}>{r.value}</T>
        </g>
      ))}
      <line x1={labelX} y1={220} x2={labelX + 300} y2={220} stroke={C.fg} />
      <T x={labelX - 10} y={248} anchor="end" weight={600}>{t.total}</T>
      <T x={labelX} y={250} size={28} weight={600} fill={fill === C.fg ? C.fg : C.accent}>{s.sum}</T>
      <T x={labelX} y={272} fill={C.body}>{s.sumNote}</T>
    </>
  );
  return (
    <Canvas h={400} label={t.alt}>
      <T x={20} y={24} mono fill={C.muted}>{t.header}</T>
      <line x1={20} y1={36} x2={1080} y2={36} stroke={C.line} />
      {side(t.traditional, 300, 210, C.fg)}
      <line x1={600} y1={48} x2={600} y2={284} stroke={C.line} strokeDasharray="6 4" />
      {side(t.lean, 850, 770, C.accent)}

      <Box x={20} y={298} width={300} height={90} fill={C.accent} />
      <T x={170} y={328} anchor="middle" size={18} weight={600} fill={C.onAccent}>{t.badge.title}</T>
      <T x={170} y={352} anchor="middle" fill={C.onAccent}>{t.badge.line}</T>
      <T x={170} y={372} anchor="middle" size={12} fill={C.onAccent}>{t.badge.note}</T>

      <Box x={620} y={298} width={460} height={90} fill={C.surface} stroke={C.line} sw={1} />
      <T x={638} y={320} weight={600}>{t.why.title}</T>
      <Lines x={638} y={340} size={13} gap={17} fill={C.body} lines={t.why.lines} />
    </Canvas>
  );
}
