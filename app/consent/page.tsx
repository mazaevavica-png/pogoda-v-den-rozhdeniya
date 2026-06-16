import type { Metadata } from 'next'
import LegalDocumentLayout, { LegalList, LegalSection } from '@/components/legal/LegalDocumentLayout'
import {
  COLLECTED_PERSONAL_DATA,
  DATA_PROCESSING_PURPOSES,
  LEGAL_CONFIG,
} from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Согласие на обработку персональных данных — Погода в День Рождения',
  description:
    'Согласие пользователя на обработку персональных данных при оформлении заказа на сайте Погода в День Рождения.',
  robots: { index: true, follow: true },
}

export default function ConsentPage() {
  return (
    <LegalDocumentLayout title="Согласие на обработку персональных данных">
      <LegalSection title="1. Общие положения">
        <p>
          Настоящим, свободно, своей волей и в своём интересе, я (далее — «Субъект персональных
          данных») даю согласие {LEGAL_CONFIG.ownerName} ({LEGAL_CONFIG.ownerStatus}), далее —
          «Оператор», на обработку моих персональных данных на условиях, изложенных ниже.
        </p>
        <p>
          Согласие предоставляется при использовании сайта{' '}
          <a
            href={LEGAL_CONFIG.websiteUrl}
            className="underline underline-offset-2 hover:text-gold-600"
            style={{ color: '#7A5E16' }}
          >
            {LEGAL_CONFIG.websiteUrl}
          </a>{' '}
          и оформлении заказа на сертификат «{LEGAL_CONFIG.projectName}».
        </p>
      </LegalSection>

      <LegalSection title="2. Перечень персональных данных">
        <p>Согласие распространяется на обработку следующих персональных данных:</p>
        <LegalList items={COLLECTED_PERSONAL_DATA} />
      </LegalSection>

      <LegalSection title="3. Цели обработки персональных данных">
        <p>Обработка персональных данных осуществляется исключительно в целях:</p>
        <LegalList items={DATA_PROCESSING_PURPOSES} />
      </LegalSection>

      <LegalSection title="4. Действия с персональными данными">
        <p>
          Оператор вправе совершать с персональными данными следующие действия: сбор, запись,
          систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение,
          использование, передачу (предоставление, доступ) — в объёме, необходимом для исполнения
          заказа, — обезличивание, блокирование, удаление и уничтожение.
        </p>
        <p>
          Обработка может осуществляться как с использованием средств автоматизации, так и без
          их использования.
        </p>
      </LegalSection>

      <LegalSection title="5. Передача персональных данных">
        <p>
          Я согласен(на) на передачу моих персональных данных третьим лицам исключительно в случаях,
          когда это необходимо для исполнения заказа (службы доставки, платёжные системы, сервисы
          связи), при условии соблюдения ими требований законодательства о персональных данных.
        </p>
      </LegalSection>

      <LegalSection title="6. Срок действия согласия">
        <p>
          Согласие действует с момента его предоставления (отправки формы заказа или иного
          подтверждения на Сайте) до достижения целей обработки либо до момента его отзыва,
          если иное не предусмотрено законодательством Российской Федерации.
        </p>
      </LegalSection>

      <LegalSection title="7. Порядок отзыва согласия">
        <p>
          Согласие может быть отозвано путём направления письменного уведомления Оператору на
          адрес электронной почты{' '}
          <a
            href={`mailto:${LEGAL_CONFIG.email}`}
            className="underline underline-offset-2 hover:text-gold-600"
            style={{ color: '#7A5E16' }}
          >
            {LEGAL_CONFIG.email}
          </a>{' '}
          или по телефону{' '}
          <a
            href={`tel:${LEGAL_CONFIG.phoneTel}`}
            className="underline underline-offset-2 hover:text-gold-600"
            style={{ color: '#7A5E16' }}
          >
            {LEGAL_CONFIG.phone}
          </a>
          .
        </p>
        <p>
          В случае отзыва согласия Оператор прекращает обработку персональных данных и уничтожает
          их в срок, не превышающий 30 (тридцати) дней с даты получения отзыва, если иное не
          предусмотрено законом (например, обязанность хранения данных для налогового учёта).
        </p>
        <p>
          Отзыв согласия может повлечь невозможность исполнения текущего или будущих заказов.
        </p>
      </LegalSection>

      <LegalSection title="8. Подтверждение согласия">
        <p>
          Нажимая кнопку «Оформить заказ» на Сайте и/или отправляя форму заказа, Субъект
          персональных данных подтверждает, что:
        </p>
        <LegalList
          items={[
            'ознакомлен(а) с настоящим Согласием и Политикой конфиденциальности;',
            'даёт согласие на обработку персональных данных в указанном объёме и для указанных целей;',
            'предоставляет достоверные данные.',
          ]}
        />
      </LegalSection>

      <LegalSection title="9. Контактные данные Оператора">
        <p>
          {LEGAL_CONFIG.ownerName}
          <br />
          Статус: {LEGAL_CONFIG.ownerStatus}
          <br />
          Сайт:{' '}
          <a
            href={LEGAL_CONFIG.websiteUrl}
            className="underline underline-offset-2 hover:text-gold-600"
            style={{ color: '#7A5E16' }}
          >
            {LEGAL_CONFIG.websiteUrl}
          </a>
          <br />
          Email:{' '}
          <a
            href={`mailto:${LEGAL_CONFIG.email}`}
            className="underline underline-offset-2 hover:text-gold-600"
            style={{ color: '#7A5E16' }}
          >
            {LEGAL_CONFIG.email}
          </a>
          <br />
          Телефон:{' '}
          <a
            href={`tel:${LEGAL_CONFIG.phoneTel}`}
            className="underline underline-offset-2 hover:text-gold-600"
            style={{ color: '#7A5E16' }}
          >
            {LEGAL_CONFIG.phone}
          </a>
        </p>
      </LegalSection>
    </LegalDocumentLayout>
  )
}
