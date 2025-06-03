import { describe, expect, test, vi } from 'vitest';
import { getFileFromBlob, openExternalLink } from '@/utils/link';

describe('Библиотека link', () => {
  test('openExternalLink должен вызывать метод open у глобального обьекта window', () => {
    vi.spyOn(window, 'open').mockImplementation(() => window);
    openExternalLink('testLink');
    expect(window.open).toHaveBeenCalledOnce();
    expect(window.open).toHaveBeenCalledWith('testLink', '_blank');

    openExternalLink('testLink', 'testTarget');
    expect(window.open).toHaveBeenCalledWith('testLink', 'testTarget');
  });

  test('getFileFromBlob должен отрисовать элемент с параметрами: href и download', () => {
    vi.stubGlobal('URL', { createObjectURL: () => '' });

    const mockFile: File = new File(['blob'], 'test.pdf');
    getFileFromBlob(mockFile);

    const createdLink = document.getElementsByTagName('A')[0];
    expect(createdLink).not.toBeNull();
    expect(createdLink?.getAttribute('download')).toBe(mockFile.name);
    expect((createdLink as HTMLLinkElement)?.href).not.empty;
  });
});
