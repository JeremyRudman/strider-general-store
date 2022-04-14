import { getDateString, getTimeString } from './helper';

describe('Testing getTimeString', () => {
    it('should return morning time string', () => {
        var morningDate = new Date("2021-02-02 10:06:00.000");
        expect(getTimeString(morningDate)).toBe("10:06am")
    })

    it('should return afternoon time string', () => {
        var afternoonDate = new Date("2021-02-02 13:09:00.000");
        expect(getTimeString(afternoonDate)).toBe("01:09pm")
    })

    it('should return midnight time string', () => {
        var morningDate = new Date("2021-02-02 00:00:00.000");
        expect(getTimeString(morningDate)).toBe("12:00am")
    })

    it('should return null on bad date', () => {
        var badDate = new Date("fdgsdgdfs");
        expect(getTimeString(badDate)).toBe(null)
    })

    it('should return null on no date', () => {
        expect(getTimeString(null)).toBe(null)
    })
});

describe('Testing getDateString', () => {
    it('should return new years date string', () => {
        var newYearsDate = new Date("2000-01-01 10:06:00.000");
        expect(getDateString(newYearsDate)).toBe("01/01/2000")
    })

    it('should return last day Of year string', () => {
        var newYearsDate = new Date("2000-12-31 10:06:00.000");
        expect(getDateString(newYearsDate)).toBe("12/31/2000")
    })
  
    it('should return null on no date', () => {
        var badDate = new Date("fdgsdgdfs");
        expect(getDateString(badDate)).toBe(null)
    })

    it('should return null on no date', () => {
        expect(getTimeString(null)).toBe(null)
    })

});