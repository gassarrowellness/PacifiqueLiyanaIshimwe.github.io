import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, Target, Activity } from "lucide-react";

const userGrowthData = [
  { month: "Jan", users: 120000 },
  { month: "Feb", users: 280000 },
  { month: "Mar", users: 450000 },
  { month: "Apr", users: 680000 },
  { month: "May", users: 920000 },
  { month: "Jun", users: 1100000 },
  { month: "Jul", users: 1350000 },
  { month: "Aug", users: 1580000 },
  { month: "Sep", users: 1750000 },
  { month: "Oct", users: 1900000 },
  { month: "Nov", users: 2050000 },
  { month: "Dec", users: 2100000 },
];

const engagementData = [
  { week: "W1", sessions: 45, queries: 32 },
  { week: "W2", sessions: 52, queries: 41 },
  { week: "W3", sessions: 48, queries: 38 },
  { week: "W4", sessions: 61, queries: 55 },
  { week: "W5", sessions: 58, queries: 52 },
  { week: "W6", sessions: 72, queries: 68 },
  { week: "W7", sessions: 69, queries: 63 },
  { week: "W8", sessions: 85, queries: 79 },
];

const retentionData = [
  { cohort: "D1", rate: 85 },
  { cohort: "D7", rate: 72 },
  { cohort: "D14", rate: 65 },
  { cohort: "D30", rate: 58 },
  { cohort: "D60", rate: 48 },
  { cohort: "D90", rate: 42 },
];

const featureAdoptionData = [
  { feature: "AI Chat", adoption: 78 },
  { feature: "Weather", adoption: 65 },
  { feature: "Prices", adoption: 58 },
  { feature: "Health", adoption: 45 },
  { feature: "Loans", adoption: 32 },
];

const kpis = [
  { label: "Monthly Active Users", value: "2.1M", change: "+12%", icon: Users, positive: true },
  { label: "Activation Rate", value: "40%", change: "+8%", icon: TrendingUp, positive: true },
  { label: "M1 Retention", value: "75%", change: "+15%", icon: Target, positive: true },
  { label: "Avg. Session Length", value: "4.2 min", change: "+22%", icon: Activity, positive: true },
];

const ProductDashboards = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dashboards" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Analytics</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
            Product <span className="gradient-text">Dashboards</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Realistic product analytics showcasing the metrics I track and optimize as a product manager.
          </p>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {kpis.map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <kpi.icon className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-emerald-600">{kpi.change}</span>
                </div>
                <p className="text-2xl font-bold text-display">{kpi.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{kpi.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* User Growth */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-medium mb-1">User Growth</h3>
              <p className="text-xs text-muted-foreground mb-4">Monthly active users over 12 months</p>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={userGrowthData}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(220, 70%, 50%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(220, 70%, 50%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 91%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="hsl(220, 10%, 45%)" />
                  <YAxis tick={{ fontSize: 11 }} stroke="hsl(220, 10%, 45%)" tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                  <Tooltip formatter={(v: number) => `${(v / 1000000).toFixed(2)}M users`} />
                  <Area type="monotone" dataKey="users" stroke="hsl(220, 70%, 50%)" fill="url(#colorUsers)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Engagement */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-medium mb-1">Engagement Metrics</h3>
              <p className="text-xs text-muted-foreground mb-4">Weekly sessions vs. AI queries</p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 91%)" />
                  <XAxis dataKey="week" tick={{ fontSize: 11 }} stroke="hsl(220, 10%, 45%)" />
                  <YAxis tick={{ fontSize: 11 }} stroke="hsl(220, 10%, 45%)" />
                  <Tooltip />
                  <Bar dataKey="sessions" fill="hsl(220, 70%, 50%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="queries" fill="hsl(260, 60%, 55%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Retention */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-medium mb-1">Retention Curve</h3>
              <p className="text-xs text-muted-foreground mb-4">Cohort retention over time</p>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={retentionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 91%)" />
                  <XAxis dataKey="cohort" tick={{ fontSize: 11 }} stroke="hsl(220, 10%, 45%)" />
                  <YAxis tick={{ fontSize: 11 }} stroke="hsl(220, 10%, 45%)" unit="%" />
                  <Tooltip formatter={(v: number) => `${v}%`} />
                  <Line type="monotone" dataKey="rate" stroke="hsl(220, 70%, 50%)" strokeWidth={2} dot={{ r: 4, fill: "hsl(220, 70%, 50%)" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Feature Adoption */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-medium mb-1">Feature Adoption</h3>
              <p className="text-xs text-muted-foreground mb-4">Percentage of users using each feature</p>
              <div className="space-y-4 mt-2">
                {featureAdoptionData.map((f) => (
                  <div key={f.feature}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{f.feature}</span>
                      <span className="font-medium">{f.adoption}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-primary transition-all duration-1000"
                        style={{ width: `${f.adoption}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDashboards;
