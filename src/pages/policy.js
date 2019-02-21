import React from 'react'

import Layout from '../components/layout'
import Profile from '../components/profile'
import { Config } from '../config'
import Divider from '../components/divider'
import AboutMe from '../components/about-me'
import Projects from '../components/projects'

const IndexPage = () => (
  <Layout>
    <h1>Datenschutzerkl&auml;rung</h1>
    <h2>1. Datenschutz auf einen Blick</h2>
    <h3>Allgemeine Hinweise</h3>{' '}
    <p>
      Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber,
      was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
      besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
      pers&ouml;nlich identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche
      Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
      Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
    </p>
    <h3>Datenerfassung auf unserer Website</h3>{' '}
    <p>
      <strong>
        Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?
      </strong>
    </p>{' '}
    <p>
      Die Datenverarbeitung auf dieser Website erfolgt durch den
      Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Impressum dieser
      Website entnehmen.
    </p>{' '}
    <p>
      <strong>Wie erfassen wir Ihre Daten?</strong>
    </p>{' '}
    <p>
      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
      Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular
      eingeben.
    </p>{' '}
    <p>
      Andere Daten werden automatisch beim Besuch der Website durch unsere
      IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
      Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
      Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website
      betreten.
    </p>{' '}
    <p>
      <strong>Wof&uuml;r nutzen wir Ihre Daten?</strong>
    </p>{' '}
    <p>
      Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
      Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres
      Nutzerverhaltens verwendet werden.
    </p>{' '}
    <p>
      <strong>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</strong>
    </p>{' '}
    <p>
      Sie haben jederzeit das Recht unentgeltlich Auskunft &uuml;ber Herkunft,
      Empf&auml;nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
      erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung, Sperrung
      oder L&ouml;schung dieser Daten zu verlangen. Hierzu sowie zu weiteren
      Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit unter der im
      Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein
      Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
    </p>{' '}
    <p>
      Au&szlig;erdem haben Sie das Recht, unter bestimmten Umst&auml;nden die
      Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu
      verlangen. Details hierzu entnehmen Sie der Datenschutzerkl&auml;rung
      unter &bdquo;Recht auf Einschr&auml;nkung der Verarbeitung&ldquo;.
    </p>
    <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
    <h3>Datenschutz</h3>{' '}
    <p>
      Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen
      Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich
      und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
      Datenschutzerkl&auml;rung.
    </p>{' '}
    <p>
      Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
      Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
      pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende
      Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir erheben und
      wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem
      Zweck das geschieht.
    </p>{' '}
    <p>
      Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.B.
      bei der Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann.
      Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist
      nicht m&ouml;glich.
    </p>
    <h3>Hinweis zur verantwortlichen Stelle</h3>{' '}
    <p>
      Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
      Website ist:
    </p>{' '}
    <p>
      Lars Gr&ouml;ber
      <br />
      T&ouml;ngesgasse 38
      <br />
      60311 Frankfurt am Main
    </p>
    <p>E-Mail: lars@larsgroeber.com</p>
    <p>
      Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person,
      die allein oder gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der
      Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.
      &Auml;.) entscheidet.
    </p>
    <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{' '}
    <p>
      Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
      ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
      bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine
      formlose Mitteilung per E-Mail an uns. Die Rechtm&auml;&szlig;igkeit der
      bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
      unber&uuml;hrt.
    </p>
    <h3>
      Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie
      gegen Direktwerbung (Art. 21 DSGVO)
    </h3>{' '}
    <p>
      <strong>
        Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f
        DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gr&uuml;nden, die sich
        aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
        personenbezogenen Daten Widerspruch einzulegen; dies gilt auch f&uuml;r
        ein auf diese Bestimmungen gest&uuml;tztes Profiling. Die jeweilige
        Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie
        dieser Datenschutzerkl&auml;rung. Wenn Sie Widerspruch einlegen, werden
        wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es
        sei denn, wir k&ouml;nnen zwingende schutzw&uuml;rdige Gr&uuml;nde
        f&uuml;r die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
        Freiheiten &uuml;berwiegen oder die Verarbeitung dient der
        Geltendmachung, Aus&uuml;bung oder Verteidigung von
        Rechtsanspr&uuml;chen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
      </strong>
    </p>{' '}
    <p>
      <strong>
        Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu
        betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die
        Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke
        derartiger Werbung einzulegen; dies gilt auch f&uuml;r das Profiling,
        soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
        widersprechen, werden Ihre personenbezogenen Daten anschlie&szlig;end
        nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art.
        21 Abs. 2 DSGVO).
      </strong>
    </p>
    <h3>Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde</h3>{' '}
    <p>
      Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
      Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
      Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder
      des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht
      unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
      Rechtsbehelfe.
    </p>
    <h3>Recht auf Daten&uuml;bertragbarkeit</h3>{' '}
    <p>
      Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder
      in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder
      an einen Dritten in einem g&auml;ngigen, maschinenlesbaren Format
      aush&auml;ndigen zu lassen. Sofern Sie die direkte &Uuml;bertragung der
      Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
      soweit es technisch machbar ist.
    </p>
    <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>{' '}
    <p>
      Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
      &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
      Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw.
      TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie
      daran, dass die Adresszeile des Browsers von &ldquo;http://&rdquo; auf
      &ldquo;https://&rdquo; wechselt und an dem Schloss-Symbol in Ihrer
      Browserzeile.
    </p>{' '}
    <p>
      Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die
      Daten, die Sie an uns &uuml;bermitteln, nicht von Dritten mitgelesen
      werden.
    </p>
    <h3>Auskunft, Sperrung, L&ouml;schung und Berichtigung</h3>{' '}
    <p>
      Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das
      Recht auf unentgeltliche Auskunft &uuml;ber Ihre gespeicherten
      personenbezogenen Daten, deren Herkunft und Empf&auml;nger und den Zweck
      der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder
      L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
      personenbezogene Daten k&ouml;nnen Sie sich jederzeit unter der im
      Impressum angegebenen Adresse an uns wenden.
    </p>
    <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>{' '}
    <p>
      Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
      personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
      jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das
      Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden
      F&auml;llen:
    </p>{' '}
    <ul>
      {' '}
      <li>
        Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen
        Daten bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu
        &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben Sie das
        Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
        Daten zu verlangen.
      </li>{' '}
      <li>
        Wenn die Verarbeitung Ihrer personenbezogenen Daten
        unrechtm&auml;&szlig;ig geschah / geschieht, k&ouml;nnen Sie statt der
        L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung verlangen.
      </li>{' '}
      <li>
        Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie
        jedoch zur Aus&uuml;bung, Verteidigung oder Geltendmachung von
        Rechtsanspr&uuml;chen ben&ouml;tigen, haben Sie das Recht, statt der
        L&ouml;schung die Einschr&auml;nkung der Verarbeitung Ihrer
        personenbezogenen Daten zu verlangen.
      </li>{' '}
      <li>
        Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben,
        muss eine Abw&auml;gung zwischen Ihren und unseren Interessen
        vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
        &uuml;berwiegen, haben Sie das Recht, die Einschr&auml;nkung der
        Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
      </li>{' '}
    </ul>{' '}
    <p>
      Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt
      haben, d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen
      &ndash; nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus&uuml;bung
      oder Verteidigung von Rechtsanspr&uuml;chen oder zum Schutz der Rechte
      einer anderen nat&uuml;rlichen oder juristischen Person oder aus
      Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der
      Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.
    </p>
    <h2>3. Datenerfassung auf unserer Website</h2>
    <h3>Server-Log-Dateien</h3>{' '}
    <p>
      Der Provider der Seiten erhebt und speichert automatisch Informationen in
      so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
      &uuml;bermittelt. Dies sind:
    </p>{' '}
    <ul>
      {' '}
      <li>Browsertyp und Browserversion</li> <li>verwendetes Betriebssystem</li>{' '}
      <li>Referrer URL</li> <li>Hostname des zugreifenden Rechners</li>{' '}
      <li>Uhrzeit der Serveranfrage</li> <li>IP-Adresse</li>{' '}
    </ul>{' '}
    <p>
      Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird nicht
      vorgenommen.
    </p>{' '}
    <p>
      Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
      DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
      technisch fehlerfreien Darstellung und der Optimierung seiner Website
      &ndash; hierzu m&uuml;ssen die Server-Log-Files erfasst werden.
    </p>
    <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>{' '}
    <p>
      Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
      Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
      (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
      gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
      Einwilligung weiter.
    </p>{' '}
    <p>
      Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
      b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines Vertrags
      zusammenh&auml;ngt oder zur Durchf&uuml;hrung vorvertraglicher
      Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen F&auml;llen beruht
      die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und /
      oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da
      wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns
      gerichteten Anfragen haben.
    </p>{' '}
    <p>
      Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben
      bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur
      Speicherung widerrufen oder der Zweck f&uuml;r die Datenspeicherung
      entf&auml;llt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens).
      Zwingende gesetzliche Bestimmungen &ndash; insbesondere gesetzliche
      Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
    </p>
    <h3>Google Analytics</h3>
    <p>
      Soweit Sie Ihre Einwilligung erklärt haben, wird auf dieser Website Google
      Analytics eingesetzt, ein Webanalysedienst der Google Ireland Limited
      (&bdquo;Google&ldquo;). Die Nutzung umfasst die Betriebsart
      &bdquo;Universal Analytics&ldquo;. Hierdurch ist es möglich, Daten,
      Sitzungen und Interaktionen über mehrere Geräte hinweg einer pseudonymen
      User-ID zuzuordnen und so die Aktivitäten eines Nutzers geräteübergreifend
      zu analysieren. Dieser Datenschutzhinweis wird zur Verfügung gestellt von{' '}
      <a href="https://www.intersoft-consulting.de" target="_blank">
        www.intersoft-consulting.de
      </a>
      .
    </p>
    <p>
      Google Analytics verwendet sog. &bdquo;Cookies&ldquo;, Textdateien, die
      auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung
      der Website durch Sie ermöglichen. Die durch das Cookie erzeugten
      Informationen über Ihre Benutzung dieser Website werden in der Regel an
      einen Server von Google in den USA übertragen und dort gespeichert. Im
      Falle der Aktivierung der IP-Anonymisierung auf dieser Website, wird Ihre
      IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der
      Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den
      Europäischen Wirtschaftsraum zuvor gekürzt. Wir weisen Sie darauf hin,
      dass auf dieser Webseite Google Analytics um eine IP-Anonymisierung
      erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen (sog.
      IP-Masking) zu gewährleisten. Die im Rahmen von Google Analytics von Ihrem
      Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google
      zusammengeführt. Nähere Informationen zu Nutzungsbedingungen und
      Datenschutz finden Sie unter{' '}
      <a href="https://www.google.com/analytics/terms/de.html" target="_blank">
        https://www.google.com/analytics/terms/de.html
      </a>{' '}
      bzw. unter{' '}
      <a href="https://policies.google.com/?hl=de" target="_blank">
        https://policies.google.com/?hl=de
      </a>
      .
    </p>
    <p>
      <strong>Zwecke der Verarbeitung</strong>
      <br /> Im Auftrag des Betreibers dieser Website wird Google diese
      Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
      Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit
      der Websitenutzung und der Internetnutzung verbundene Dienstleistungen
      gegenüber dem Websitebetreiber zu erbringen.
    </p>
    <p>
      <strong>Rechtsgrundlage</strong>
      <br />
      Die Rechtsgrundlage für den Einsatz von Google Analytics ist Ihre
      Einwilligung gemäß{' '}
      <a href="https://dsgvo-gesetz.de/art-6-dsgvo/" target="_blank">
        Art. 6 Abs. 1 S.1 lit. a DSGVO
      </a>
      .
    </p>
    <p>
      <strong>Empfänger / Kategorien von Empfängern</strong>
      <br />
      Der Empfänger der erhobenen Daten ist Google.
    </p>
    <p>
      <strong>Übermittlung in Drittstaaten</strong>
      <br />
      Die personenbezogenen Daten werden unter dem EU-US Privacy Shield auf
      Grundlage des Angemessenheitsbeschlusses der Europäischen Kommission in
      die USA übermittelt. Das Zertifikat können Sie{' '}
      <a
        href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI"
        target="_blank"
      >
        hier
      </a>{' '}
      abrufen.
    </p>
    <p>
      <strong>Dauer der Datenspeicherung</strong>
      <br />
      Die von uns gesendeten und mit Cookies, Nutzerkennungen (z. B. User-ID)
      oder Werbe-IDs verknüpften Daten werden nach 14 Monaten automatisch
      gelöscht. Die Löschung von Daten, deren Aufbewahrungsdauer erreicht ist,
      erfolgt automatisch einmal im Monat.
    </p>
    <p>
      <strong>Betroffenenrechte</strong>
      <br />
      Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
      widerrufen, indem Sie die Speicherung der Cookies durch eine entsprechende
      Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
      darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
      Funktionen dieser Website vollumfänglich werden nutzen können.
    </p>
    <p>
      Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und
      auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an
      Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem
      Sie das{' '}
      <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank">
        Browser-Add-on
      </a>{' '}
      herunterladen und installieren. Opt-Out-Cookies verhindern die zukünftige
      Erfassung Ihrer Daten beim Besuch dieser Website. Um die Erfassung durch
      Universal Analytics über verschiedene Geräte hinweg zu verhindern, müssen
      Sie das Opt-Out auf allen genutzten Systemen durchführen. Wenn Sie hier
      klicken, wird das Opt-Out-Cookie gesetzt:{' '}
      <a href="javascript:gaOptout()">
        <strong>Google Analytics deaktivieren</strong>
      </a>
    </p>
    <p>
      Quelle: <a href="https://www.e-recht24.de">eRecht24</a> (angepasst)
    </p>
  </Layout>
)

export default IndexPage
