export const upcomingMatchesColumns = [
  { field: "date", headerName: "Date", width: 120 },
  { field: "time", headerName: "Time", width: 100 },
  { field: "opponent", headerName: "Opponent", width: 200 },
  { 
    field: "venue", 
    headerName: "Venue", 
    width: 130,
    renderCell: (params) => (
      <span style={{ color: params.value === 'Home' ? '#2563eb' : 'inherit' }}>
        {params.value}
      </span>
    )
  },
  { 
    field: "competition", 
    headerName: "Competition", 
    width: 150,
    renderCell: (params) => (
      <span style={{ color: params.value === 'Cup' ? '#ea580c' : 'inherit' }}>
        {params.value}
      </span>
    )
  },
  { 
    field: "status", 
    headerName: "Preparation Status", 
    width: 180,
    renderCell: (params) => {
      const colors = {
        'Complete': '#16a34a',
        'In Progress': '#ea580c',
        'Pending': '#6b7280'
      };
      return <span style={{ color: colors[params.value] }}>{params.value}</span>;
    }
  },
];

export const upcomingMatchesRows = [
  { 
    id: 1, 
    date: '2024-02-20', 
    time: '19:45', 
    opponent: 'Rangers FC', 
    venue: 'Home',
    competition: 'League',
    status: 'Complete'
  },
  { 
    id: 2, 
    date: '2024-02-27', 
    time: '20:00', 
    opponent: 'Celtic FC', 
    venue: 'Away',
    competition: 'Cup',
    status: 'In Progress'
  },
  { 
    id: 3, 
    date: '2024-03-05', 
    time: '15:30', 
    opponent: 'Aberdeen', 
    venue: 'Home',
    competition: 'League',
    status: 'Pending'
  },
  { 
    id: 4, 
    date: '2024-02-20', 
    time: '19:45', 
    opponent: 'Rangers FC', 
    venue: 'Home',
    competition: 'League',
    status: 'Complete'
  },
  { 
    id: 5, 
    date: '2024-02-27', 
    time: '20:00', 
    opponent: 'Celtic FC', 
    venue: 'Away',
    competition: 'Cup',
    status: 'In Progress'
  },
  { 
    id: 6, 
    date: '2024-03-05', 
    time: '15:30', 
    opponent: 'Aberdeen', 
    venue: 'Home',
    competition: 'League',
    status: 'Pending'
  },
  { 
    id: 7, 
    date: '2024-02-20', 
    time: '19:45', 
    opponent: 'Rangers FC', 
    venue: 'Home',
    competition: 'League',
    status: 'Complete'
  },
  { 
    id: 8, 
    date: '2024-02-27', 
    time: '20:00', 
    opponent: 'Celtic FC', 
    venue: 'Away',
    competition: 'Cup',
    status: 'In Progress'
  },
  { 
    id: 9, 
    date: '2024-03-05', 
    time: '15:30', 
    opponent: 'Aberdeen', 
    venue: 'Home',
    competition: 'League',
    status: 'Pending'
  },
  { 
    id: 10, 
    date: '2024-02-20', 
    time: '19:45', 
    opponent: 'Rangers FC', 
    venue: 'Home',
    competition: 'League',
    status: 'Complete'
  },
  { 
    id: 11, 
    date: '2024-02-27', 
    time: '20:00', 
    opponent: 'Celtic FC', 
    venue: 'Away',
    competition: 'Cup',
    status: 'In Progress'
  },
  { 
    id: 12, 
    date: '2024-03-05', 
    time: '15:30', 
    opponent: 'Aberdeen', 
    venue: 'Home',
    competition: 'League',
    status: 'Pending'
  },
];

export const standingsColumns = [
  { field: "pos", headerName: "Pos", width: 70 },
  { field: "team", headerName: "Team", width: 200 },
  { field: "w", headerName: "W", width: 100 },
  { field: "l", headerName: "L", width: 100 },
  { field: "d", headerName: "D", width: 100 },
  { field: "ga", headerName: "GA", width: 100 },
  { field: "gf", headerName: "GF", width: 100 },
  { 
    field: "gd", 
    headerName: "GD", 
    width: 100,
    renderCell: (params) => (
      <span style={{ color: params.value > 0 ? '#16a34a' : '#dc2626' }}>
        {params.value > 0 ? `+${params.value}` : params.value}
      </span>
    )
  },
  { field: "points", headerName: "QP", width: 100 },
];

export const standingsRows = [
  { 
    id: 1, 
    pos: 1, 
    team: 'Celtic FC', 
    w: 14, 
    l: 2, 
    d: 2, 
    ga: 42, 
    gf: 12, 
    gd: 30, 
    points: 44 
  },
  { 
    id: 2, 
    pos: 2, 
    team: 'Rangers FC', 
    w: 12, 
    l: 4, 
    d: 2, 
    ga: 38, 
    gf: 15, 
    gd: 23, 
    points: 38 
  },
  { 
    id: 3, 
    pos: 3, 
    team: 'Hearts', 
    w: 10, 
    l: 6, 
    d: 2, 
    ga: 32, 
    gf: 20, 
    gd: 12, 
    points: 32 
  },
  { 
    id: 4, 
    pos: 4, 
    team: 'Aberdeen', 
    w: 8, 
    l: 7, 
    d: 3, 
    ga: 28, 
    gf: 25, 
    gd: 3, 
    points: 27 
  },
  { 
    id: 5, 
    pos: 5, 
    team: 'Hibernian', 
    w: 7, 
    l: 8, 
    d: 3, 
    ga: 24, 
    gf: 28, 
    gd: -4, 
    points: 24 
  },
];

export const playerManagementColumns = [
  { 
    field: "player", 
    headerName: "Player", 
    width: 200 
  },
  { 
    field: "position", 
    headerName: "Position", 
    width: 150 
  },
  { 
    field: "age", 
    headerName: "Age", 
    width: 100 
  },
  { 
    field: "currentForm", 
    headerName: "Current Form", 
    width: 150,
    renderCell: (params) => {
      const colors = {
        'Excellent': '#16a34a',
        'Good': '#2563eb',
        'Average': '#ea580c'
      };
      return <span style={{ color: colors[params.value] }}>{params.value}</span>;
    }
  },
  { 
    field: "fitness", 
    headerName: "Fitness", 
    width: 120,
    renderCell: (params) => (
      <span style={{ color: params.value >= 90 ? '#16a34a' : '#2563eb' }}>
        {params.value}%
      </span>
    )
  },
  { 
    field: "aiRecommendation", 
    headerName: "AI Recommendation", 
    width: 180 
  }
];

export const playerManagementRows = [
  {
    id: 1,
    player: "John Smith",
    position: "Forward",
    age: 24,
    currentForm: "Excellent",
    fitness: 95,
    aiRecommendation: "Start"
  },
  {
    id: 2,
    player: "Mike Johnson",
    position: "Midfielder",
    age: 28,
    currentForm: "Good",
    fitness: 88,
    aiRecommendation: "Start"
  },
  {
    id: 3,
    player: "David Williams",
    position: "Defender",
    age: 22,
    currentForm: "Average",
    fitness: 92,
    aiRecommendation: "Rotation"
  }
];
