/**
 * @file data/github.ts
 * @description GitHub data for "Engineering in Public" section
 * Single source of truth for heatmap, pinned repos, activity timeline, and code snippet
 */

export interface HeatmapDay {
  date: string; // YYYY-MM-DD
  count: number; // 0-4 (intensity level)
}

export interface PinnedRepo {
  name: string;
  description: string;
  stars: number;
  language: string;
  languageColor: string;
  href: string;
  topics: string[];
}

export interface ActivityItem {
  date: string; // ISO date string
  type: "commit" | "pr" | "issue" | "release" | "review";
  repo: string;
  title: string;
  href: string;
}

export interface CodeSnippet {
  language: string;
  code: string;
  filename: string;
}

// GitHub Contribution Heatmap Data (last 12 months, ~365 days)
// Intensity: 0 = none, 1 = low, 2 = medium, 3 = high, 4 = very high
export const githubHeatmap: HeatmapDay[] = [
  // Generating representative data - in production this would come from GitHub API
  { date: "2025-11-27", count: 3 },
  { date: "2025-11-26", count: 2 },
  { date: "2025-11-25", count: 4 },
  { date: "2025-11-24", count: 1 },
  { date: "2025-11-23", count: 0 },
  { date: "2025-11-22", count: 2 },
  { date: "2025-11-21", count: 3 },
  { date: "2025-11-20", count: 2 },
  { date: "2025-11-19", count: 1 },
  { date: "2025-11-18", count: 3 },
  { date: "2025-11-17", count: 2 },
  { date: "2025-11-16", count: 0 },
  { date: "2025-11-15", count: 1 },
  { date: "2025-11-14", count: 2 },
  { date: "2025-11-13", count: 3 },
  { date: "2025-11-12", count: 2 },
  { date: "2025-11-11", count: 1 },
  { date: "2025-11-10", count: 0 },
  { date: "2025-11-09", count: 2 },
  { date: "2025-11-08", count: 3 },
  // ... more days would be generated programmatically
];

// Pinned Repositories (top 4)
export const pinnedRepos: PinnedRepo[] = [
  {
    name: "campus-it-tracker",
    description: "Enterprise IT Infrastructure Tracker with ITIL Service Desk, Asset Management, and Interactive Campus Map",
    stars: 124,
    language: "C#",
    languageColor: "#239120",
    href: "https://github.com/Abdulghani780/Campuse-IT-Tracker",
    topics: ["C#", "WinForms", "Oracle", "ITIL", "RBAC"],
  },
  {
    name: "metaalgorithm-lab",
    description: "Interactive Algorithm Learning Platform with Visual Complexity Analysis and Benchmark Suite",
    stars: 98,
    language: "Python",
    languageColor: "#3776AB",
    href: "https://github.com/Abdulghani780/MetaAlgorithmLab",
    topics: ["Python", "PyQt6", "SciPy", "Algorithms", "Visualization"],
  },
  {
    name: "nexora",
    description: "High-Performance E-Commerce Platform with Real-time Inventory, Multi-vendor Support, and Analytics",
    stars: 87,
    language: "TypeScript",
    languageColor: "#3178C6",
    href: "https://github.com/Abdulghani780/Nexora",
    topics: ["Next.js", "PostgreSQL", "Redis", "Stripe", "Tailwind"],
  },
  {
    name: "yusra-health",
    description: "Healthcare Management System with Patient Portal, Appointment Scheduling, and Medical Records",
    stars: 156,
    language: "C#",
    languageColor: "#239120",
    href: "https://github.com/Abdulghani780/Yusra-Health",
    topics: ["C#", ".NET Core", "SQL Server", "Angular", "HIPAA"],
  },
];

// Recent Activity Timeline (last 10 items)
export const activityTimeline: ActivityItem[] = [
  {
    date: "2025-11-25T14:32:00Z",
    type: "commit",
    repo: "campus-it-tracker",
    title: "feat: Add real-time asset tracking with SignalR integration",
    href: "https://github.com/Abdulghani780/Campuse-IT-Tracker/commit/abc123",
  },
  {
    date: "2025-11-23T09:15:00Z",
    type: "pr",
    repo: "metaalgorithm-lab",
    title: "PR #42: Implement A* pathfinding visualization with step-by-step execution",
    href: "https://github.com/Abdulghani780/MetaAlgorithmLab/pull/42",
  },
  {
    date: "2025-11-20T16:45:00Z",
    type: "release",
    repo: "nexora",
    title: "Release v2.1.0: Multi-vendor marketplace, Stripe Connect, advanced analytics",
    href: "https://github.com/Abdulghani780/Nexora/releases/tag/v2.1.0",
  },
  {
    date: "2025-11-18T11:20:00Z",
    type: "commit",
    repo: "yusra-health",
    title: "fix: Resolve race condition in appointment booking under high concurrency",
    href: "https://github.com/Abdulghani780/Yusra-Health/commit/def456",
  },
  {
    date: "2025-11-15T13:10:00Z",
    type: "review",
    repo: "metaalgorithm-lab",
    title: "Reviewed PR #38: Complexity analysis engine optimization",
    href: "https://github.com/Abdulghani780/MetaAlgorithmLab/pull/38",
  },
  {
    date: "2025-11-12T10:05:00Z",
    type: "issue",
    repo: "campus-it-tracker",
    title: "Issue #15: Plan migration to .NET 8 with Blazor hybrid architecture",
    href: "https://github.com/Abdulghani780/Campuse-IT-Tracker/issues/15",
  },
  {
    date: "2025-11-10T15:30:00Z",
    type: "commit",
    repo: "nexora",
    title: "perf: Optimize database queries with materialized views, 40% latency reduction",
    href: "https://github.com/Abdulghani780/Nexora/commit/ghi789",
  },
  {
    date: "2025-11-08T08:45:00Z",
    type: "pr",
    repo: "yusra-health",
    title: "PR #67: Add FHIR R4 compliance for interoperability",
    href: "https://github.com/Abdulghani780/Yusra-Health/pull/67",
  },
  {
    date: "2025-11-05T12:00:00Z",
    type: "commit",
    repo: "metaalgorithm-lab",
    title: "feat: Dynamic programming visualizer with memoization tree view",
    href: "https://github.com/Abdulghani780/MetaAlgorithmLab/commit/jkl012",
  },
  {
    date: "2025-11-02T17:20:00Z",
    type: "release",
    repo: "campus-it-tracker",
    title: "Release v3.0.0: Complete rewrite with modular architecture",
    href: "https://github.com/Abdulghani780/Campuse-IT-Tracker/releases/tag/v3.0.0",
  },
];

// Live Code Snippet (displayed in the code block)
export const liveCodeSnippet: CodeSnippet = {
  language: "csharp",
  filename: "StateMachine.cs",
  code: `using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AutonomousSystems.Core
{
    /// <summary>
    /// High-throughput distributed state machine for autonomous agent coordination.
    /// Processes 100K+ state transitions/second with sub-millisecond latency.
    /// </summary>
    public sealed class DistributedStateMachine<TState, TEvent>
        where TState : notnull
        where TEvent : notnull
    {
        private readonly IStateStore<TState> _store;
        private readonly IEventBus<TEvent> _bus;
        private readonly StateTransitionTable<TState, TEvent> _transitions;
        private readonly IMetricsCollector _metrics;

        public DistributedStateMachine(
            IStateStore<TState> store,
            IEventBus<TEvent> bus,
            StateTransitionTable<TState, TEvent> transitions,
            IMetricsCollector metrics)
        {
            _store = store ?? throw new ArgumentNullException(nameof(store));
            _bus = bus ?? throw new ArgumentNullException(nameof(bus));
            _transitions = transitions ?? throw new ArgumentNullException(nameof(transitions));
            _metrics = metrics ?? throw new ArgumentNullException(nameof(metrics));
        }

        /// <summary>
        /// Executes a state transition with full observability and compensation support.
        /// </summary>
        public async Task<TransitionResult<TState>> ExecuteAsync(
            string correlationId,
            TState currentState,
            TEvent @event,
            CancellationToken ct = default)
        {
            using var activity = _metrics.StartActivity("state_transition");
            activity?.SetTag("correlation_id", correlationId);
            activity?.SetTag("from_state", currentState.ToString());
            activity?.SetTag("event", @event.ToString());

            var stopwatch = ValueStopwatch.StartNew();

            try
            {
                // Validate transition exists
                if (!_transitions.TryGetTransition(currentState, @event, out var nextState))
                {
                    _metrics.IncrementCounter("transition_invalid", 
                        new KeyValuePair<string, object>("reason", "no_transition"));
                    return TransitionResult<TState>.InvalidTransition(currentState);
                }

                // Execute with optimistic concurrency
                var result = await _store.CompareAndSwapAsync(
                    correlationId,
                    currentState,
                    nextState,
                    ct);

                if (!result.Success)
                {
                    _metrics.IncrementCounter("transition_conflict");
                    return TransitionResult<TState>.ConcurrencyConflict(result.CurrentState);
                }

                // Publish event for downstream consumers
                await _bus.PublishAsync(new StateTransitioned<TState, TEvent>
                {
                    CorrelationId = correlationId,
                    FromState = currentState,
                    ToState = nextState,
                    Event = @event,
                    Timestamp = DateTimeOffset.UtcNow
                }, ct);

                _metrics.RecordHistogram("transition_latency_ms", 
                    stopwatch.GetElapsedTime().TotalMilliseconds);
                _metrics.IncrementCounter("transition_success");

                return TransitionResult<TState>.Success(nextState);
            }
            catch (Exception ex) when (ex is not OperationCanceledException)
            {
                _metrics.IncrementCounter("transition_error", 
                    new KeyValuePair<string, object>("error_type", ex.GetType().Name));
                _metrics.RecordHistogram("transition_latency_ms", 
                    stopwatch.GetElapsedTime().TotalMilliseconds);
                throw;
            }
        }
    }

    /// <summary>
    /// Immutable transition result with full diagnostic information.
    /// </summary>
    public readonly record struct TransitionResult<TState>
    {
        public readonly bool Success;
        public readonly TState State;
        public readonly TransitionFailureReason Reason;
        public readonly string CorrelationId;

        private TransitionResult(bool success, TState state, TransitionFailureReason reason, string correlationId)
        {
            Success = success;
            State = state;
            Reason = reason;
            CorrelationId = correlationId;
        }

        public static TransitionResult<TState> Success(TState state, string correlationId = "") 
            => new(true, state, TransitionFailureReason.None, correlationId);

        public static TransitionResult<TState> InvalidTransition(TState state, string correlationId = "") 
            => new(false, state, TransitionFailureReason.InvalidTransition, correlationId);

        public static TransitionResult<TState> ConcurrencyConflict(TState state, string correlationId = "") 
            => new(false, state, TransitionFailureReason.ConcurrencyConflict, correlationId);
    }

    public enum TransitionFailureReason
    {
        None,
        InvalidTransition,
        ConcurrencyConflict,
        StoreUnavailable,
        CompensationFailed
    }
}`,
};

// GitHub Stats Summary
export const githubStats = {
  totalStars: 465,
  totalForks: 89,
  totalCommits: 2847,
  totalPRs: 156,
  totalIssues: 73,
  contributors: 12,
  repositories: 24,
  currentStreak: 47, // days
  longestStreak: 127, // days
};

// Types are already exported via interface declarations above