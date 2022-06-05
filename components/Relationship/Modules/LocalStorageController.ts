// ローカルストレージ保存
export function SaveLocalStorage(key: string, value: any): boolean {
  if (localStorage || key) {
    try {
      if (!value) localStorage.removeItem(key);
      else localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      return false;
    }
    return true;
  }
  return false;
}

// ローカルストレージ取得
export function GetLocalStorage(key: string): any {
  if (localStorage || key) {
    try {
      return JSON.parse(localStorage.getItem(key) ?? '');
    } catch {
      return null;
    }
  }
  return null;
}
