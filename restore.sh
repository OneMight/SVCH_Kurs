#!/bin/bash
if [ -f .env ]; then
    export $(cat .env | xargs)
else
    echo "Ошибка: файл .env не найден."
    exit 1
fi

DB_SERVICE="${DB_HOST}"
BACKUP_FILE="./backups/latest.sql"
DB_VOLUME_NAME="svch_kurs_db_data" 

if [ ! -f "$BACKUP_FILE" ]; then
    echo " Ошибка: Файл резервной копии '${BACKUP_FILE}' не найден."
    echo "Сначала создайте резервную копию, используя 'sh backup.sh'."
    exit 1
fi

echo "--- НАЧИНАЕМ ПРОЦЕСС ВОССТАНОВЛЕНИЯ И ТЕСТИРОВАНИЯ ---"

echo "1/4. Остановка и удаление контейнеров..."
docker-compose stop
docker-compose rm -f


echo "2/4. Удаление тома с данными: ${DB_VOLUME_NAME} (Имитация потери данных)..."
docker volume rm "${DB_VOLUME_NAME}"

echo "3/4. Перезапуск контейнеров с новым, пустым томом..."
docker-compose up -d --force-recreate

echo "Ожидание запуска базы данных (5 секунд)..."
sleep 5
docker-compose up -d server
echo "4/4. Восстановление данных из ${BACKUP_FILE}..."


if [ $? -eq 0 ]; then
    echo " ВОССТАНОВЛЕНИЕ ЗАВЕРШЕНО УСПЕШНО."
    echo "Проверьте работоспособность приложения."
else
    echo " КРИТИЧЕСКАЯ ОШИБКА при восстановлении."
    exit 1
fi