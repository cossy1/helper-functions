import { formatDate } from './formatDate';

export const convertArrayOfObjectsToCSV = (data: object[], formats: any[]) => {
    let result: string;
    const columnDelimiter = ',';
    const lineDelimiter = '\n';
    formats = formats.filter(column => column.accessor !== undefined);
    const keys = formats.map(column => column.name);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;
    data.forEach(item => {
        let ctr = 0;
        formats.forEach(column => {
            if (ctr > 0) result += columnDelimiter;
            const accessors = column.accessor.split('.');

            let value;
            accessors.forEach(key => {
                value = value ? value[key] : item[key];
            });
            result += column.accessor.includes('date')
                ? `"${formatDate(value)}"`
                : `"${value}"`;
            ctr++;
        });
        result += lineDelimiter;
    });
    return result;
};

export const downloadCSV = (
    data: object[],
    formats: any[],
    filename?: string,
) => {
    if (!data || data.length === 0) return;
    const link = document.createElement('a');

    let csv = convertArrayOfObjectsToCSV(data, formats);
    if (csv == null) return;

    const formatFileName = filename ? `${filename}.csv` : 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute('href', encodeURI(csv));
    link.setAttribute('download', formatFileName);
    link.click();
};
