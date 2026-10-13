# MongoDB schema blueprint

All schemas reside in `src/models/`, use timestamps and appropriate query indexes.

| Model | Purpose | Key associations |
| --- | --- | --- |
| Campus | Tenant registration and pilot status | slug, status |
| User | Identities and roles | campusId → Campus |
| Issue | Student reports | campusId, submittedBy, assignedTo, attachmentIds |
| IssueUpdate | Status audit trail | issueId, performedBy, campusId |
| Service | Campus service directory | campusId, slug, verifiedAt |
| Appointment | Student appointment requests | campusId, studentId, serviceId |
| EmergencyContact | Verified directory entries | campusId, verifiedBy |
| Notification | Account notifications | campusId, userId |
| Upload | Attached media references | campusId, ownerId, issueId |
| AuditLog | Administrative accountability | campusId, actorId, entityId |

## Isolation strategy
Enforce tenant boundaries in all service queries, not only UI filters. Prevent privilege escalation via role payloads. Verify media ownership, avoid sensitive information in logs, and sanitize output fields.

## Implementation phase
Add indexes needed by actual query patterns, transactions for cross-document updates, TTLs for security tokens, and integration tests for cross-campus access.
