INSERT INTO status (id, recName, isEnabled)
VALUES (1, 'status_1', TRUE),
    (2, 'status_2', FALSE),
    (3, 'status_3', TRUE),
    (4, 'status_4', FALSE),
    (5, 'status_5', TRUE);
INSERT INTO outline (id, recName, statusId)
VALUES (1, 'outline_1', 1),
    (2, 'outline_2', 2),
    (3, 'outline_3', 3),
    (4, 'outline_4', 4),
    (5, 'outline_5', 5);
INSERT INTO security_group (
        id,
        recName,
        boxGroupName,
        organizationUnitName1,
        organizationUnitName2,
        isEnabled
    )
VALUES (
        1,
        'securityGroup_1',
        'boxGroupName_1',
        'organizationUnitName1_1',
        'organizationUnitName2_1',
        TRUE
    ),
    (
        2,
        'securityGroup_2',
        'boxGroupName_2',
        'organizationUnitName1_2',
        'organizationUnitName2_2',
        FALSE
    ),
    (
        3,
        'securityGroup_3',
        'boxGroupName_3',
        'organizationUnitName1_3',
        'organizationUnitName2_3',
        TRUE
    ),
    (
        4,
        'securityGroup_4',
        'boxGroupName_4',
        'organizationUnitName1_4',
        'organizationUnitName2_4',
        FALSE
    ),
    (
        5,
        'securityGroup_5',
        'boxGroupName_5',
        'organizationUnitName1_5',
        'organizationUnitName2_5',
        TRUE
    );
INSERT INTO box_folder_role (id, recName, isEnabled)
VALUES (1, 'boxFolderRole_1', TRUE),
    (2, 'boxFolderRole_2', FALSE),
    (3, 'boxFolderRole_3', TRUE),
    (4, 'boxFolderRole_4', FALSE),
    (5, 'boxFolderRole_5', TRUE);
INSERT INTO sgs (
        id,
        recName,
        isEnabled,
        securityGroupId,
        boxFolderRoleId
    )
VALUES (1, 'sgs_1', TRUE, 1, 1),
    (2, 'sgs_2', FALSE, 2, 2),
    (3, 'sgs_3', TRUE, 3, 3),
    (4, 'sgs_4', FALSE, 4, 4),
    (5, 'sgs_5', TRUE, 5, 5);
INSERT INTO box_folder_access_for_collabo (id, recName, isEnabled)
VALUES (1, 'box_folder_access_for_collabo_1', TRUE),
    (2, 'box_folder_access_for_collabo_2', FALSE),
    (3, 'box_folder_access_for_collabo_3', TRUE),
    (4, 'box_folder_access_for_collabo_4', FALSE),
    (5, 'box_folder_access_for_collabo_5', TRUE);
INSERT INTO folder (
        id,
        recName,
        outlineId,
        sgsId,
        boxFolderAccessForCollaboId
    )
VALUES (1, 'folder_1', 1, 1, 1),
    (2, 'folder_2', 2, 2, 2),
    (3, 'folder_3', 3, 3, 3),
    (4, 'folder_4', 4, 4, 4),
    (5, 'folder_5', 5, 5, 5);