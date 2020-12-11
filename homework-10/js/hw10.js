'use strict';

import {default as Climber} from './Climber.js';
import {default as ClimberGroup} from './ClimberGroup.js';
import {default as Mountain} from './Mountain.js';

/*
* Описать объектную модель Альпинист, Гора, Группа для восхождения на гору.
Альпинист создаётся с именем (не менее 3 символов) и адресом проживания (не менее 5 символов).
Гора создаётся с названием (не менее 4 символов), страной (не менее 4 символов) и высотой (не менее 100 метров)
Группа для восхождения на гору создаётся со следующими характеристиками:
идёт набор в группу или нет;
массив альпинистов;
гора;
должна быть возможность добавить альпиниста в группу, если набор ещё идёт
В отдельном файле создать:
3 группы для восхождений на 3 различных горы:
В первой группе 3 альпиниста (набор закрыт)
Во второй и третьей группах по 2 альпиниста (набор в эти группы открыт)
При выполнении задания не забывайте про сеттеры и геттеры. */

let climber1 = new Climber("Андрей", "Санкт-Петербург");
let climber2 = new Climber("Виктор", "Москва");
let climber3 = new Climber("Сергей", "Саратов");
let climber4 = new Climber("Василий", "Владивосток");

let mountain1 = new Mountain("Эверест", "Непал", 8848);
let mountain2 = new Mountain("Манаслу", "Китай", 8156);
let mountain3 = new Mountain("Мануа-Кея", "Гавайи", 10203);

let group1 = new ClimberGroup();
let group2 = new ClimberGroup();
let group3 = new ClimberGroup();


group1.createClimberGroup(mountain1.name, climber1.name, climber2.name, climber3.name);
group2.createClimberGroup(mountain2.name, climber4.name, climber2.name);
group3.createClimberGroup(mountain3.name, climber1.name, climber3.name);


