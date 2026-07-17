// lib/storage.ts

export const getComplaints = (): any[] => {
  const data = localStorage.getItem('complaints');
  try {
    const parsed = data ? JSON.parse(data) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
};

export const saveComplaint = (complaint: any) => {
  const data = getComplaints();
  data.push(complaint);
  localStorage.setItem('complaints', JSON.stringify(data));
};

export const updateComplaintStatus = (id: number, newStatus: string) => {
  const data = getComplaints();
  const updated = data.map((c: any) => (c.id === id ? { ...c, status: newStatus } : c));
  localStorage.setItem('complaints', JSON.stringify(updated));
};