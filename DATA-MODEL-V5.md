# V5 Data Model
users/{familyUid}
athletes/{athleteId} -> familyUid
athletes/{athleteId}/seasonRegistrations/{seasonId}
athletes/{athleteId}/documents/{docId}
athletes/{athleteId}/payments/team-{teamId}
teams/{teamId}
teams/{teamId}/roster/{athleteId}
teams/{teamId}/events/{eventId}
seasons/{seasonId}

One family login can own multiple athlete records. Registration is one document per athlete per Explore season, enforcing at most first + second choice.
