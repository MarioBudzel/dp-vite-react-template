const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getBaseURL = () => {
  return baseUrl ?? 'Nope';
};

export function hexToRgb(hex) {
  hex = hex.replace('#', '');

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `${r}, ${g}, ${b}`;
}

export const downloadFile = (blopPart: BlobPart, type: BlobPropertyBag['type'], fileName: string) => {
  try {
    const blob = new Blob([blopPart], { type: type });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return true;
  } catch {
    return false;
  }
};
