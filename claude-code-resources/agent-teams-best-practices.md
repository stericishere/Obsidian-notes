# Agent Teams Best Practices Guide

Strategic patterns and techniques for reliable, efficient agent team execution.

---

## Core Principles

### 1. **Contract-First Spawning** (Most Important)

**Problem:** Agents can't truly run in parallel when they have hidden dependencies.

**Example of Failure:**
```
Database Agent: Still defining schema...
Backend Agent: Already built entire API on wrong schema
Result: Complete rework needed, massive token waste
```

**Solution: Define Contracts First**

```
Phase 1 (Sequential):
  ├─ Database Agent: Define schema and send "contract"
  └─ (Don't spawn other agents yet)

Phase 2 (Parallel):
  ├─ Backend Agent: (now has correct schema)
  └─ Frontend Agent: (can wait if needed)
```

### 2. **Explicit Instructions Over Implicit Expectations**

**Don't:**
```
"Build a web app with backend and frontend"
```

**Do:**
```
"Create an agent team with 3 members:
1. Database Agent: Create schema first, send contract
2. Backend Agent: Build API after receiving DB contract
3. Frontend Agent: Build UI after API contract received"
```

### 3. **Research Before Implementation**

**Pattern:**
```
Step 1: Use sub-agents to research/analyze
↓
Step 2: Create detailed implementation plan
↓
Step 3: Use agent teams to execute plan
```

This prevents agents from making decisions in a vacuum.

---

## Workflow Patterns

### Pattern 1: Research → Plan → Implement

**Best for:** Complex projects with dependencies

**Execution:**

1. **Research Phase (Sub-agents)**
   ```
   Request: "Analyze this codebase and create an implementation plan
   for adding authentication"

   Result: Detailed plan with dependencies identified
   ```

2. **Planning Phase (Main agent)**
   ```
   Review the plan
   Identify what must happen sequentially vs in parallel
   Create contract points
   ```

3. **Implementation Phase (Agent teams)**
   ```
   Use plan with contract-first approach
   Send agents to work with explicit phase boundaries
   ```

### Pattern 2: Contract-First Architecture

**Best for:** Projects with clear architectural layers

**Example: Full-Stack Feature**

```
CONTRACT PHASE 1 (Database Team):
├─ Define database schema
├─ Create migrations
└─ Send contract: "Database ready with these tables..."

CONTRACT PHASE 2 (Backend Team):
├─ Uses contract from Phase 1
├─ Builds API endpoints
└─ Sends contract: "API endpoints ready at /api/..."

PARALLEL PHASE (Frontend Team):
├─ Uses both contracts
├─ Builds UI components
└─ Integration complete
```

### Pattern 3: Iterative Refinement

**Best for:** When exact requirements aren't known upfront

**Execution:**

1. **Round 1:** Small team (2-3 agents) builds MVP
2. **Review:** Check output with lead agent
3. **Round 2:** Expand team if needed for refinement
4. **Iterate:** Repeat until acceptable quality

---

## Team Composition Strategies

### Right-Sized Teams

**Team Size Considerations:**

| Size | Use Case | Trade-offs |
|------|----------|-----------|
| **2-3** | Simple features, code review | Fast, cheap, limited scope |
| **4-5** | Full-stack features | Good parallelization, moderate cost |
| **6-8** | Complex systems, architecture changes | High parallelization, expensive |
| **9-16** | Enterprise projects, compiler building | Maximum parallelization, very expensive |

### Team Role Definitions

**Effective role division:**

```
Backend-heavy project:
├─ Database Specialist
├─ API Developer
├─ Cache/Performance Engineer
└─ Integration Tester

Frontend-heavy project:
├─ Component Architect
├─ UI/UX Implementer
├─ State Management Specialist
└─ Accessibility Reviewer

Full-stack project:
├─ Database Architect
├─ Backend Developer
├─ Frontend Developer
└─ DevOps/Infrastructure Engineer
```

**Anti-pattern:** Vague roles like "Developer 1, Developer 2, Developer 3"

### Expertise Assignment

**Good:**
```
"Agent 1 (Security Specialist): Focus on auth, validation, encryption
Agent 2 (Performance Engineer): Focus on caching, optimization
Agent 3 (Quality Assurance): Focus on testing, edge cases"
```

**Bad:**
```
"Agent 1: Work on stuff
Agent 2: Also work on stuff
Agent 3: And stuff"
```

---

## Communication Patterns

### Explicit Phase Boundaries

**Structure communication** with clear phases:

```
PHASE 1: Setup
├─ Define requirements and contracts
├─ All agents acknowledge understanding
└─ Lead agent: "Ready to proceed"

PHASE 2: Core Implementation
├─ Agents execute their roles
├─ Check-ins at milestones
└─ Share blockers immediately

PHASE 3: Integration
├─ Agents coordinate interconnections
├─ Fix cross-cutting concerns
└─ Final validation

PHASE 4: Polish & Testing
├─ Refinement and bug fixes
├─ Comprehensive testing
└─ Final delivery
```

### Status Check-In Protocol

**Regular check-ins reduce hallucination:**

```
"Agents, provide a 30-second status update:
- What are you currently working on?
- Any blockers or dependencies?
- Are you on track for Phase 2?"
```

### Dependency Communication

**Explicit dependency statements prevent failures:**

```
Backend Agent → Frontend Agent:
"I've created endpoints: /api/users, /api/posts
You can now build the user list component"

Frontend Agent → Backend Agent:
"I need pagination support for posts list
Add ?page=N&limit=M to /api/posts"

Backend Agent responds:
"Updated. Now available at /api/posts?page=1&limit=10"
```

---

## Handling Common Issues

### Issue 1: Agents Stepping on Each Other's Toes

**Symptom:** Two agents modify the same file, causing conflicts

**Prevention:**
```
Upfront: "Each agent owns specific files:
- Database Agent: database/ and migrations/
- Backend Agent: api/ and services/
- Frontend Agent: components/ and pages/"
```

**Recovery:**
```
"You've created a conflict. Agent A, handle the integration.
Agent B, wait for Agent A to send the updated contract."
```

### Issue 2: Agents Get Stuck Waiting

**Symptom:** One agent completes quickly, others still working

**Prevention:**
```
"Agents work in phases, not necessarily in lockstep:
- While Backend Agent finishes, Frontend Agent can
  build component structure based on API contracts
- Can integrate later when both are ready"
```

### Issue 3: Poor Quality Output

**Symptom:** Agents produce untested, incomplete code

**Prevention:**
```
"Each agent includes in their deliverable:
- Code
- Unit tests (90%+ coverage)
- Documentation
- Known limitations or TODOs"
```

### Issue 4: Hallucinating Team Member Decisions

**Symptom:** Agent makes up what another agent said/did

**Prevention:**
```
"Share explicit contracts:
Agent A sends: 'Here's my schema...'
Agent B receives: '[Paste exact schema]'
No assumptions; copy/paste actual outputs"
```

---

## Advanced Techniques

### Technique 1: Skill Template with Instructions

**Create a reusable skill** (advanced):

```markdown
# /build with agent team

Create an agent team based on implementation plan:
1. Analyze plan for dependencies
2. Identify sequential phases vs parallel work
3. Create contract boundaries
4. Spawn agents with explicit instructions
5. Manage terminal coordination

This reduces hallucination compared to freestyle requests.
```

### Technique 2: Pre-Flight Checklist

**Before spawning team, verify:**

```
□ Clear implementation plan exists
□ Dependencies identified and sequenced
□ Team roles clearly defined
□ Contract boundaries established
□ Success criteria defined
□ Resource budget (tokens) acceptable
□ Fallback plan if team fails
```

### Technique 3: Real-Time Status Queries

**Navigate to each agent terminal:**

```bash
Ctrl+B → Right  # Switch panes

"What are you working on right now?"
"Are you blocked on anything?"
"Do you have what you need from other agents?"
```

---

## Token Efficiency Tips

### Reduce Token Waste

1. **Use research-first approach**
   - Sub-agent research → Plan creation → Agent team execution
   - Prevents agents from making expensive mistakes

2. **Explicit contracts reduce rework**
   - Saves token budget through fewer iterations
   - Prevents "built on wrong assumption" scenarios

3. **Smaller teams when possible**
   - 3 agents = 60% token cost of 5 agents
   - Use larger teams only when parallelization saves tokens overall

4. **Phase-based spawning**
   - Don't spawn all agents simultaneously if there are dependencies
   - Sequential contract phases save token overhead

### Calculate ROI

```
Token cost of agent team: X tokens
Time saved vs single agent: Y hours (human value)
Quality improvement: Z% (fewer bugs, better coverage)

If (human salary/hour * Y) > (X * $0.003), then ROI > 0
```

---

## Real-World Example: Building a Feature

### Scenario: Add User Authentication to Existing App

**Step 1: Research (Sub-agent)**
```
"Analyze the current app architecture and propose
an authentication system. What dependencies exist?"

Result: Detailed analysis of where auth touches code
```

**Step 2: Create Plan
```
- Backend: Add auth middleware, user model, routes
- Frontend: Add login form, session management
- Database: Add users table, refresh tokens table
- Testing: Auth flow, security edge cases
```

**Step 3: Identify Contracts
```
Phase 1: Database team creates schema
  → Contract: "Users table ready with fields: id, email, password_hash, created_at"

Phase 2: Backend team builds using contract
  → Contract: "Auth endpoints ready at POST /auth/register, /auth/login"

Phase 3: Frontend team builds using contract
  → Contract: "Login flow tested and working"

Phase 4: Integration testing
```

**Step 4: Execute with Agent Teams**
```
Lead Agent: "Build authentication system using contract-first approach"

Agent Teams deployed with contract phases ↓

Result: Auth system built in ~1-2 cycles with clear handoffs
```

---

## Decision Tree: When to Use What

```
Task requires parallel work?
├─ No → Use single Claude Code agent
└─ Yes → Does it need coordination?
    ├─ No (research, isolated analysis) → Use sub-agents
    └─ Yes (implementation, dependencies) → Use agent teams
            ├─ Can define contracts? → Use contract-first agent teams
                └─ Result: Reliable, token-efficient execution
            └─ Highly uncertain? → Start with research sub-agents first
                └─ Then use agent teams with resulting plan
```

---

## Checklist for Success

### Before Launch
- [ ] Detailed implementation plan exists
- [ ] Dependencies identified
- [ ] Team roles clearly defined
- [ ] Contract boundaries established
- [ ] Success criteria defined
- [ ] Token budget allocated
- [ ] Fallback plan documented

### During Execution
- [ ] Monitor first phase carefully
- [ ] Verify agents received contracts
- [ ] Check for blockers/dependencies
- [ ] Use status queries to verify progress
- [ ] Adjust phases if needed

### After Completion
- [ ] Review agent quality
- [ ] Test integration points
- [ ] Document lessons learned
- [ ] Refine process for next use
- [ ] Update team composition if needed

---

## Summary

**Agent Teams Success Formula:**

```
Clear Plan + Explicit Contracts + Defined Roles + Active Monitoring
= Reliable, Efficient Parallel Execution
```

Start with contract-first approach, iterate based on results, and continuously refine your team composition and workflow patterns.
