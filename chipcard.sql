/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50151
Source Host           : localhost:3306
Source Database       : ecossmain

Target Server Type    : MYSQL
Target Server Version : 50151
File Encoding         : 65001

Date: 2015-11-04 17:38:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `chipcard`
-- ----------------------------
DROP TABLE IF EXISTS `chipcard`;
CREATE TABLE `chipcard` (
  `cnum` varchar(20) NOT NULL,
  `type` varchar(20) DEFAULT NULL,
  `content` varchar(200) DEFAULT NULL,
  `cpu` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`cnum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of chipcard
-- ----------------------------
INSERT INTO `chipcard` VALUES ('111', 're', '存很多', 'e');
INSERT INTO `chipcard` VALUES ('2', 'we', '很多啊', '国产');
INSERT INTO `chipcard` VALUES ('5435', 'tre', 'fdg', 'gfd');
INSERT INTO `chipcard` VALUES ('gfd', '国产', null, 'gdf');

-- ----------------------------
-- Table structure for `offerdata`
-- ----------------------------
DROP TABLE IF EXISTS `offerdata`;
CREATE TABLE `offerdata` (
  `id号` bigint(20) NOT NULL AUTO_INCREMENT,
  `foreid` bigint(20) DEFAULT NULL,
  `package_number` varchar(20) DEFAULT NULL,
  `ssn` varchar(50) DEFAULT 'null',
  `co_bank_cardno` varchar(19) DEFAULT NULL,
  `initial_password` varchar(8) DEFAULT NULL,
  `card_id` varchar(20) DEFAULT NULL,
  `card_serial_number` varchar(20) DEFAULT NULL,
  `dete_of_submission` date DEFAULT NULL,
  `status` varchar(20) DEFAULT 'no',
  `audit_opinion` varchar(20) DEFAULT NULL,
  `reason` varchar(20) DEFAULT NULL,
  `handid` varchar(20) DEFAULT NULL,
  `upstate` varchar(50) DEFAULT 'no',
  PRIMARY KEY (`id号`),
  KEY `chipid` (`handid`),
  CONSTRAINT `chipid` FOREIGN KEY (`handid`) REFERENCES `chipcard` (`cnum`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=483 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of offerdata
-- ----------------------------
INSERT INTO `offerdata` VALUES ('3', null, 'zk2015012800014', 'hn201589250', 'gongshangyihang', '12345678', null, '9872394724779', null, 'hege', null, null, 'gfd', 'upyes');
INSERT INTO `offerdata` VALUES ('4', null, 'zk2015012800014', 'hn201589287', 'gongshangyihang', '12344445', null, '9999999999', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('5', null, 'zk2015012800014', 'hn201586780', 'gongshangyihang', '88888888', null, '1242342424', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('6', null, 'zk2015012800014', 'hn201589235', 'gongshangyihang', '12345678', null, '12368631231', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('7', null, 'zk2015012800017', 'hn201586780', 'gongshangyihang', '88888888', null, '1242342424', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('8', null, 'zk2015012800017', 'hn201589444', 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('9', null, 'zk2015012800017', 'hn201589241', 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('10', '1053', 'zk2015012800017', 'hn201589248', 'gongshangyihang', '', '235654', '', '2015-05-31', 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('11', '1403', 'cn1434675343501', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('12', '1404', 'cn1434675343501', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('13', '1405', 'cn1434675343501', null, 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('14', '1406', 'cn1434675343501', null, 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('15', '728', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('16', '731', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('17', '732', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('18', '735', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('19', '738', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('20', '739', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('21', '741', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('22', '742', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('23', '743', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('24', '745', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('25', '746', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('26', '748', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('27', '750', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('28', '751', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('29', '752', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('30', '753', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('31', '754', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('32', '758', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('33', '762', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('34', '763', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('35', '764', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('36', '768', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('37', '770', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('38', '771', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('39', '772', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('40', '775', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('41', '776', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('42', '777', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('43', '778', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('44', '781', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('45', '785', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('46', '786', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('47', '787', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('48', '790', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('49', '791', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('50', '792', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('51', '793', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('52', '794', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('53', '797', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('54', '799', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('55', '800', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('56', '809', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('57', '811', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('58', '813', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('59', '816', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('60', '817', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('61', '819', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('62', '821', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('63', '822', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('64', '825', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('65', '826', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('66', '827', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('67', '832', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('68', '834', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('69', '837', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('70', '839', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('71', '840', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('72', '841', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('73', '843', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('74', '844', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('75', '847', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('76', '848', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('77', '849', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('78', '850', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('79', '852', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('80', '853', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('81', '854', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('82', '855', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('83', '856', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('84', '858', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('85', '859', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('86', '861', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('87', '862', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('88', '863', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('89', '865', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('90', '866', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('91', '867', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('92', '870', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('93', '871', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('94', '875', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('95', '877', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('96', '878', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('97', '880', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('98', '884', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('99', '885', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('100', '886', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('101', '887', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('102', '889', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('103', '896', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('104', '897', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('105', '898', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('106', '899', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('107', '900', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('108', '901', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('109', '903', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('110', '904', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('111', '905', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('112', '909', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('113', '910', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('114', '911', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('115', '915', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('116', '916', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('117', '918', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('118', '919', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('119', '921', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('120', '923', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('121', '924', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('122', '925', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('123', '926', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('124', '927', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('125', '932', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('126', '933', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('127', '937', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('128', '938', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('129', '941', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('130', '942', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('131', '943', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('132', '944', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('133', '946', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('134', '948', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('135', '949', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('136', '950', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('137', '951', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('138', '952', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('139', '953', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('140', '954', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('141', '955', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('142', '956', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('143', '957', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('144', '958', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('145', '959', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('146', '962', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('147', '966', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('148', '967', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('149', '968', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('150', '969', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('151', '970', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('152', '971', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('153', '973', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('154', '975', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('155', '976', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('156', '977', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('157', '978', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('158', '982', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('159', '984', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('160', '986', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('161', '987', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('162', '988', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('163', '989', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('164', '990', 'cn1435905484193', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('165', '759', 'cn1436424744160', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('166', '760', 'cn1436424744160', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('167', '761', 'cn1436424744160', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('168', '765', 'cn1436424744160', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('169', '766', 'cn1436424744160', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('170', '1514', 'cn1436426379717', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('171', '1515', 'cn1436426379717', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('172', '1516', 'cn1436426379717', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('173', '1518', 'cn1436426379717', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('174', '1519', 'cn1436426379717', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('175', '767', 'cn1436427646397', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('176', '769', 'cn1436427646397', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('177', '773', 'cn1436427646397', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('178', '774', 'cn1436427646397', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('179', '779', 'cn1436427646397', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('180', '789', 'cn1436430052961', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('181', '795', 'cn1436430052961', null, 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('182', '796', 'cn1436430052961', null, 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('183', '798', 'cn1436430052961', null, 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('184', '801', 'cn1436430052961', null, 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('185', '1536', 'cn1436435519656', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('186', '1535', 'cn1436435519656', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('187', '1534', 'cn1436435519656', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('188', '1533', 'cn1436435519656', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('189', '1541', 'cn1436436801220', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('190', '1540', 'cn1436436801220', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('191', '1539', 'cn1436436801220', null, 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('192', '1538', 'cn1436436801220', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('193', '1537', 'cn1436436801220', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('194', '1542', 'cn1436441470794', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('195', '1543', 'cn1436441470794', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('196', '1544', 'cn1436441470794', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('197', '1553', 'cn1436457591202', null, 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('198', '1552', 'cn1436457591202', null, 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('199', '1551', 'cn1436457591202', null, 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('200', '1512', 'cn1436460013873', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('201', '1554', 'cn1436460013873', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('202', '1555', 'cn1436497602004', null, 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('203', '1556', 'cn1436497602004', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('204', '1557', 'cn1436497602004', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('205', '1001', 'cn1438152781568', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('206', '1096', 'cn1438152781568', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('207', '1409', 'cn1438152781568', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('208', '1121', 'cn1437991411857', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('209', '1121', 'cn1437991411857', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('210', '1121', 'cn1437991411857', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('211', '1044', 'cn1438827971155', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('212', '1045', 'cn1438827971155', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('213', '1048', 'cn1438827971155', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('214', '1049', 'cn1438827971155', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('215', '1051', 'cn1438827971155', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('216', '1062', 'cn1438830952011', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('217', '1063', 'cn1438830952011', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('218', '1068', 'cn1438830952011', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('219', '1070', 'cn1438830952011', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('220', '1071', 'cn1438830952011', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('221', '1014', 'cn1438652644310', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('222', '1021', 'cn1438652644310', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('223', '1022', 'cn1438652644310', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('224', '1628', 'cn1438910981554', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('225', '1087', 'cn1438917580233', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('226', '1088', 'cn1438917580233', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('227', '1089', 'cn1438917580233', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('228', '1091', 'cn1438917580233', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('229', '1092', 'cn1438917580233', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('230', '1094', 'cn1438917580233', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('231', '1097', 'cn1438917580233', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('232', '1098', 'cn1438917580233', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('233', '1099', 'cn1438917580233', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('234', '1102', 'cn1438917580233', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('235', '1106', 'cn1438917580233', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('236', '1152', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('237', '1154', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('238', '1156', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('239', '1159', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('240', '1160', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('241', '1162', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('242', '1164', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('243', '1165', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('244', '1168', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('245', '1169', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('246', '1170', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('247', '1175', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('248', '1180', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('249', '1182', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('250', '1183', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('251', '1184', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('252', '1186', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('253', '1187', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('254', '1190', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('255', '1191', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('256', '1192', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('257', '1193', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('258', '1195', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('259', '1196', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('260', '1197', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('261', '1198', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('262', '1199', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('263', '1201', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('264', '1202', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('265', '1204', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('266', '1205', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('267', '1206', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('268', '1208', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('269', '1209', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('270', '1210', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('271', '1213', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('272', '1214', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('273', '1218', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('274', '1220', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('275', '1221', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('276', '1223', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('277', '1227', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('278', '1228', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('279', '1229', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('280', '1230', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('281', '1232', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('282', '1239', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('283', '1240', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('284', '1241', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('285', '1242', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('286', '1243', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('287', '1244', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('288', '1246', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('289', '1247', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('290', '1248', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('291', '1252', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('292', '1253', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('293', '1254', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('294', '1258', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('295', '1259', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('296', '1261', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('297', '1262', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('298', '1264', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('299', '1266', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('300', '1267', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('301', '1268', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('302', '1269', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('303', '1270', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('304', '1275', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('305', '1276', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('306', '1280', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('307', '1281', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('308', '1284', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('309', '1285', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('310', '1286', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('311', '1287', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('312', '1289', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('313', '1291', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('314', '1292', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('315', '1293', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('316', '1294', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('317', '1295', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('318', '1296', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('319', '1297', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('320', '1298', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('321', '1299', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('322', '1300', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('323', '1301', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('324', '1302', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('325', '1305', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('326', '1309', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('327', '1310', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('328', '1311', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('329', '1312', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('330', '1313', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('331', '1314', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('332', '1316', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('333', '1318', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('334', '1319', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('335', '1320', 'cn1438935408579', null, 'nongyeyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('336', '1140', 'cn1438932178286', '111', '工商银行', '', null, '', null, 'no', null, null, '5435', 'no');
INSERT INTO `offerdata` VALUES ('337', '1142', 'cn1438932178286', '123', '工商银行', '', null, '', null, 'no', null, null, '111', 'no');
INSERT INTO `offerdata` VALUES ('338', '1143', 'cn1438932178286', '333', '工商银行', '', null, '', null, 'no', null, null, '5435', 'no');
INSERT INTO `offerdata` VALUES ('339', '1107', 'cn1438932087824', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('340', '1111', 'cn1438932087824', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('341', '1113', 'cn1438932087824', null, 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('342', '1114', 'cn1438932087824', null, 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('343', '1115', 'cn1438932087824', null, 'gongshangyihang', '', null, '', null, 'no', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('344', '1130', 'cn1438932135888', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('345', '1133', 'cn1438932135888', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('346', '1134', 'cn1438932135888', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('347', '1135', 'cn1438932149823', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('348', '1136', 'cn1438932149823', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('349', '1137', 'cn1438932149823', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('350', '1331', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('351', '1332', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('352', '1333', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('353', '1334', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('354', '1335', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('355', '1336', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('356', '1340', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('357', '1341', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('358', '1342', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('359', '1344', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('360', '1345', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('361', '1346', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('362', '1347', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('363', '1348', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('364', '1350', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('365', '1351', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('366', '1352', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('367', '1353', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('368', '1356', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('369', '1357', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('370', '1364', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('371', '1365', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('372', '1367', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('373', '1368', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('374', '1370', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('375', '1372', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('376', '1373', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('377', '1374', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('378', '1376', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('379', '1379', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('380', '1380', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('381', '1381', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('382', '1383', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('383', '1384', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('384', '1386', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('385', '1387', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('386', '1388', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('387', '1391', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('388', '1392', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('389', '1396', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('390', '1397', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('391', '1398', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('392', '1399', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('393', '1400', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('394', '1401', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('395', '1402', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('396', '1408', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('397', '1410', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('398', '1411', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('399', '1412', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('400', '1417', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('401', '1418', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('402', '1419', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('403', '1420', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('404', '1421', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('405', '1422', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('406', '1423', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('407', '1424', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('408', '1425', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('409', '1426', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('410', '1427', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('411', '1433', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('412', '1434', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('413', '1435', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('414', '1436', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('415', '1437', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('416', '1442', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('417', '1443', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('418', '1444', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('419', '1445', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('420', '1446', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('421', '1451', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('422', '1453', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('423', '1454', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('424', '1455', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('425', '1457', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('426', '1460', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('427', '1461', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('428', '1464', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('429', '1467', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('430', '1468', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('431', '1469', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('432', '1470', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('433', '1471', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('434', '1475', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('435', '1477', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('436', '1478', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('437', '1479', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('438', '1481', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('439', '1484', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('440', '1485', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('441', '1488', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('442', '1490', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('443', '1491', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('444', '1492', 'cn1438936689815', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('445', '1629', 'cn1439257600867', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('446', '1639', 'cn1439262494429', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('447', '1640', 'cn1439361028067', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('448', '1641', 'cn1439363324760', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('449', '1642', 'cn1439363324760', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('450', '1643', 'cn1439363324760', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('451', '1647', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('452', '1648', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('453', '1649', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('454', '1650', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('455', '1651', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('456', '1652', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('457', '1653', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('458', '1654', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('459', '1655', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('460', '1656', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('461', '1657', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('462', '1658', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('463', '1659', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('464', '1660', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('465', '1661', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('466', '1662', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('467', '1663', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('468', '1664', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('469', '1665', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('470', '1666', 'cn1439429890792', null, 'gongshangyihang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('471', '1667', 'cn1439453833517', null, 'jiansheyinhang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('472', '1668', 'cn1439453833517', null, 'jiansheyinhang', '', null, '', null, 'buhege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('473', '1741', 'cn1439860910376', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('474', '1742', 'cn1439860910376', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('475', '1762', 'cn1440208536387', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('476', '1763', 'cn1440208536387', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('477', '1764', 'cn1440209238725', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('478', '1766', 'cn1440989987414', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('479', '1766', 'cn1440989987414', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('480', '1767', 'cn1441004177043', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'no');
INSERT INTO `offerdata` VALUES ('481', '1768', 'cn1441004745727', null, 'gongshangyihang', '', null, '', null, 'hege', null, null, '2', 'upyes');
INSERT INTO `offerdata` VALUES ('482', '5', 'zk2015012800001', null, null, null, null, null, null, 'no', null, null, null, 'no');
