import { createCourse } from "../models/course";
import { getRandomElement, getRandomNumber, getRandomDate } from "./random";
export function getRandomCourse(courseData) {
    let id = getRandomNumber(courseData.minId, courseData.maxId);
    let name = getRandomElement(courseData.courses);
    let lecturer = getRandomElement(courseData.lectors);
    let hours = getRandomNumber(courseData.minHours, courseData.maxHours);
    let cost = getRandomNumber(courseData.minCost, courseData.maxCost);
    let openingDate = getRandomDate(courseData.minYear, courseData.maxYear);
    return createCourse(id, name, lecturer, hours, cost, openingDate)
}